import * as React from "react";

const Box = (props) => {
  return (
    <div 
      style={{
        width: "180px",
        height: "180px",
        backgroundColor: props.color,
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: "prop.color"
      }}
      onClick = {props.handleClick}
      id = {props.id}
    > {/* Adds rgb value from props*/}
      <span>{props.color}</span>
    </div>
  );
};

export default Box;
