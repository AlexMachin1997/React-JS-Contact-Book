import React from "react"; //React 
import style from "./Contacts.css"; //Component Stlying

const contact = (props) => {

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={style.card}>
                <h5>{props.Name}</h5>
                <h6>{props.Phone}</h6>
                <p>{props.Email}</p>
                <button onClick={props.deleteContact} className={[style.cardbutton, style.danger].join(' ')}> Delete </button>
            </div>  
        </div>
    )
}

export default contact;