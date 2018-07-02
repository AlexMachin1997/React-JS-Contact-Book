import React, {Component} from "react"; //React 
import Contact from "../Contact";
import Spinner from "../../UI/Spinner/Spinner";

class Contacts extends Component {   



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

    let contacts = (
        
        <React.Fragment>
            {this.props.data.map(component => (
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
    if(this.props.loading){
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
