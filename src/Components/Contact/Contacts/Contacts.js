import React, {Component} from "react"; //React 
import Contact from "../Contact";
import Spinner from "../../UI/Spinner/Spinner";

class Contacts extends Component {


    state = {
        contactsArray: null,
        loading: false
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

    /* 
    Render Notes:
    - A Blank array is created
        - Each object in the array gets assigned an ID
        - As well as some configuration

    - The new array named arrayOfComponents is then looped through
        - The contact component is then used and props are passed in via the local variable used for the map
            - Contact accepts these props and the inner config is then accessed e.g. config.persons 
            
            - Contact props are :
                - key
                - name
                - phone
                - email
    */

    render() {        

    let contactsArray = [];

    for(let key in this.state.contactsArray) {
        contactsArray.push({
          id: key,
          config: this.state.contactsArray[key]
      });
    }
   
    let contacts = (
        
        <React.Fragment>
            {contactsArray.map(component => (
                <Contact 
                    key={component.id}
                    name={component.config.persons.name}
                    phone={component.config.persons.phone}
                    email={component.config.persons.email}
                />
            ))}
        </React.Fragment>
    )

    //If True then make the contacts which returns a component a spinner
    //Else dont
    if(this.state.loading){
        contacts = <Spinner />
    }

    return (  
        <div className="row">
            {contacts}
        </div>      
        )
    }
}

export default Contacts;
