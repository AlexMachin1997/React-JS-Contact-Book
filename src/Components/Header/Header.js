import React, {Component} from "react";
import classes from "./Header.css"

class Header extends Component  {
        
    state = {
        ApplicationName : "React JS Phonebook" //Header Prop
    }

    render() {
        return (
            <div className={classes.Header}>
                <h1> {this.state.ApplicationName}</h1>  
            </div>
        )
    }
}

export default Header;