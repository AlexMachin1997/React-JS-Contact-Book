import React from "react";

const addContact = () => {
    return (
        <div className="col-lg-12 col-sm-12">
        <h2> Add A Contact </h2>
        <form className="form-inline" onSubmit={this.addContact.bind(this)}>

        <label className="sr-only" htmlFor="Name">Name :</label>
        <input type="text" className={style.Input} placeholder="Input Name *" ref={this.NameRef} required="true" />
      
        <label className="sr-only" htmlFor="Email">Email :</label>
        <input type="text" className={style.Input} id={style.Email} placeholder="Input Email*" ref={this.EmailRef} requied="true" />
      
        <label className="sr-only" htmlFor="Number">Contact Number :</label>
        <input type="text" className={style.Input} placeholder="Input Contact Number *" ref={this.PhoneRef} required="true"/>
      
        <button type="submit" className={style.Button}>Submit</button>
        </form>
       </div>
    )
}

export default addContact;