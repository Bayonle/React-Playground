import React, { useState, useEffect } from "react";
import "./select.css";

const Select = props => {
  const [showOptions, setOptionVisibility] = useState(false);
  const [displayText, setDisplayText] = useState("");

  let childrenElements = React.Children.toArray(props.children);
  let optionsObj = [];
  //collect all children values and each childs child would be the display text
  childrenElements.forEach(child => {
    let { value, children } = child.props;
    optionsObj.push({ text: children, value: value });
  });
  let selected = optionsObj.find(option => option.value === props.value);

  const toggleOptionsVisibility = () => {
    setOptionVisibility(!showOptions);
  };

  let propsTopass = {
    onChange: props.onChange,
    name: props.name,
    onOptionSelected: toggleOptionsVisibility
  };

  if (childrenElements.length === 1) {
    childrenElements = React.cloneElement(childrenElements[0], propsTopass);
  } else if (childrenElements.length > 0) {
    let elements2 = [];
    childrenElements.forEach(element => {
      if (element.props.value === props.value) {
        propsTopass.className = "font-bold";
      } else {
        propsTopass.className = "";
      }
      let clone = React.cloneElement(element, propsTopass);
      elements2.push(clone);
    });
    childrenElements = elements2;
  }

  useEffect(() => {
    setDisplayText(selected !== undefined ? selected.text : "");
  }, [selected]);

  const handleKeyUp = event => {
    //   debugger
      if(event.key === 'Esc' || event.key === 'Escape'){
          setOptionVisibility(false)
      }
  }

//   const handleInputChange = (event) => {

//   }

  return (
    <div className="relative">
      {/* <div
        className="border rounded-sm text-sm border relative h-10 flex items-center px-2"
        onClick={toggleOptionsVisibility}
      >
        {getDisplayText()}
      </div> */}
      <input
        className="w-full focus:outline-none cursor-default appearance-none border rounded-sm text-sm border relative h-10 flex items-center px-2"
        onClick={toggleOptionsVisibility}
        value={displayText}
        placeholder={props.placeholder}
        readOnly
        onKeyUp={handleKeyUp}
        // onChange={handleInputChange}
      />

      <div
        className={`options-panel options bg-blue-300 absolute w-full left-0 ${
          showOptions ? "border overflow-y-scroll" : "overflow-y-hidden"
        }`}
        style={{ top: "40px", maxHeight: showOptions ? "12rem" : "0rem" }}
      >
        {childrenElements}
      </div>
    </div>
  );
};

export default Select;
