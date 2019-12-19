import React from "react";

const Spacer = props => {
  if (props.height) {
    return <div style={{ height: props.height }}></div>;
  } else if (props.width) {
    return <div style={{ width: props.width }}></div>;
  }
};

export default Spacer;
