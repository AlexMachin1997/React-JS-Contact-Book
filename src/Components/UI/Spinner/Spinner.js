/* 
Import Notes: 
- Impots react so react functionlaity can be accessed e.g. className
- Import Spinner.css so CSS modules can be appied
*/

import React from "react";
import classes from "./Spinner.css"


/* 
Spinner Notes: 
- The spinner moves around
- However, if the class isnt there then the loadin... will act as a fall back
*/

const spinner = () => (

        <div className={classes.container}>
            <div className={classes.loader}>
            Loading...
            </div>
        </div>
);

export default spinner;