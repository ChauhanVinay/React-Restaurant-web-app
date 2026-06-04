import React from 'react';
import classes from './Input.module.css';

// Wrap the component function with forwardRef
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Pass the forwarded ref directly down to the 
        native HTML input element 
      */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;