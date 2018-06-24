import React from "react";
import classes from "./Header.css"

const navbar = (props) => {
        
    return (
    
      <div className={classes.Header}>
          <h1> {props.ApplicationName}</h1>  
      </div>
       
    )
}

export default navbar