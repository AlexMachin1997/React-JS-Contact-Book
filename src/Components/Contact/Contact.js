import React from "react";
import style from "./Contact.css"

const person = (props) => (
    <div className="col-lg-4 col-md-6 col-sm-12">
        <div className={style.card}>
            <h5>{props.name}</h5>
            <h6>{props.phone}</h6>
            <p>{props.email}</p>
            <button onClick={props.deleteContact} className={[style.cardbutton, style.danger].join(' ')}> Delete </button>
        </div>  
    </div>
)

export default person;