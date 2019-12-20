import React from "react";

const Option = props => {
  function handleClick() {
    props.onChange({ currentTarget: { value: props.value, name: props.name } });
    props.onOptionSelected();
  }

  return (
    <div
      className={
        "px-2 py-1 cursor-pointer bg-white hover:bg-blue-100 text-sm " +
        props.className +`${props.activeOptionIndex === props.index ? ' bg-blue-100' : ''}`
      }
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default Option;
