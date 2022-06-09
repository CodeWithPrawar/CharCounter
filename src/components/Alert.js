import React from "react";

export default function Alert(props) {
  const Capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{height: '50px'}}>
     {  props.alert && 
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <b>{Capitalize(props.alert.type)}</b>: {props.alert.msg}
      </div>}
      </div>
    
  );
}
