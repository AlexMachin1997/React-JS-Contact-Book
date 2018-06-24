//Imports for the button component
import React from 'react';
import classes from './Button.css';

//button function which recieves props, which in this case is the text between the component e.g. <Button> Helo </Button>
const button = (props) => (
    <button className={classes.Button}>{props.children}</button>
);

export default button;