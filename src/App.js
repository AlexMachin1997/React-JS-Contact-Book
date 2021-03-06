//Imports For Project
import React, { Component } from 'react'; // React
import Contacts from "./Components/Contact/Contacts/Contacts"; //Contacts Component
import Header from "./Components/Header/Header"; // Header Component
import Input from "./Components/UI/Input/Input";
import Button from "./Components/UI/Button/Button";
import IndexCSS from "./index.css";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: {
          name: {
              elementType: "input",
              elementConfig: {
                  type: "text",
                  placeholder: "Persons Name *",
                  required: true
              },
              value: ""
          },
          email: {
            elementType: "input",
            elementConfig: {
                type: "email",
                placeholder: " Email Address *",
                required: true
            },
            value: ""
          },
          phone: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Phone Number *",
                required: true
            },
            value: ""
        },
      },
      loading: false,
      contactsArray: null,
    }
  }


    /* 
    Component Did Mount Notes:
    - Sends request to firebae via the axios instance
        - The instance contains the baseURL, so the request is baseURL + post route which is contac.json
    
    - Then
        - The contactsArray gets set to the response data from the axios call

            - Any errors display it in the console
    */
   componentDidMount () {

    this.setState({loading: true})

        fetch("https://address-book-database.firebaseio.com/contact.json")
            .then(response => {
                return response.json();
            })

            .then(json => {
                console.log(json)
                this.setState({contactsArray: json, loading: false})
            })
    }

  //Get Request To Firebase, Then Set Ingredients Object TO Response.data 
 
  addContact = (event) => {

      event.preventDefault(); //Prevents The Default Action Of A Form
    
      
      const formData = {};
     
      /* 
      for(let [temp variable] in this.state.contacts) {
        formData[attach temp variable] = to contacts[temp variable].value
      }
      
      */

      // BASIC TERM: For everything in the contacts config set the formData (Blank Object) equal to the identifier e.g. name, street equal to the state value. The object will then be populated
      // The formData is then attached to an object named object and sent to the firebase database by attaching it to the post request
      for(let formElementIdentifier in this.state.contacts) {
        formData[formElementIdentifier] = this.state.contacts[formElementIdentifier].value;
      }
      
      const data = {
        persons: formData
      }
      
      fetch("https://address-book-database.firebaseio.com/contact.json", {
        method: "POST",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then((res) => {
        console.log("Response")
        console.log(res)
      })
    }

    
    //onChange handler accepts the event object which react uses and the inputIdentifier which is the object name e.g. name or street etc 
    inputChangedHandler = (event, inputIdentifier) => {
        
      //Copies the outter state via the spread operator
      const updatedOrderForm = {
          ...this.state.contacts
      };

      //Copeis the inner configuration e.g. name : {{}}
      const updatedFormElement = {
          ...updatedOrderForm[inputIdentifier]
      };

      //Get the value of the updateFormElement 
      updatedFormElement.value = event.target.value;

      //Set the copied config e.g. name to the updated
      updatedOrderForm[inputIdentifier] = updatedFormElement;
      
      
      this.setState({contacts: updatedOrderForm});
    }

  render() {
     
    //Blank Array
    const formElementArray = [];

    for(let key in this.state.contacts) {
        formElementArray.push({
          id: key,
          config: this.state.contacts[key]
      });
    }

    let form = (
      <div className="row"  id={IndexCSS.FormRow}> 
        <div className="col-lg-12 col-sm-12">
          <h2> Add A Contact </h2>
          <form onSubmit={this.addContact} className="form-inline">
            {formElementArray.map(formElement => (
            <Input
              key= {formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={(event) => this.inputChangedHandler(event, formElement.id)}         
            />
            ))}
            <Button>Add Contact</Button>
          </form>
        </div>
      </div>
    )


    let contactsArray = [];

    for(let key in this.state.contactsArray) {
        contactsArray.push({
          id: key,
          config: this.state.contactsArray[key]
      });
    }

    return (
    <React.Fragment>
      <Header/>
      <div className="container">
        {form}
        <Contacts data={contactsArray} loading={this.state.loading} />
      </div>
      </React.Fragment>
    );
  }
}

export default App;