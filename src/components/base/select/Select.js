import React, { useState, useEffect } from "react";
import "./select.css";

const Select = props => {
  const [showOptions, setOptionVisibility] = useState(false);
  const [displayText, setDisplayText] = useState("");
  let [optionInFocus, setOptionInFocus] = useState(0);

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
    childrenElements.forEach((element, index) => {
        propsTopass.index = index;
        propsTopass.activeOptionIndex = optionInFocus;
      if (element.props.value === props.value) {
        propsTopass.className += " font-bold";
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
    //get node of currently selected option
    // if(selected !== undefined){
    //     let selectedNodeIndex = childrenElements.findIndex(element => element.props.value === selected.value);
    //     // selectedNode.currentTarget.classList.add('')
    //     setOptionInFocus(selectedNodeIndex)
    // }
  }, [selected]);

  const handleKeyUp = event => {
    console.log(event.key)
    if (event.key === "Esc" || event.key === "Escape") {
      setOptionVisibility(false);
    }else if(event.key === 'ArrowUp'){
        if(optionInFocus > 0){
            setOptionInFocus(--optionInFocus)
            console.log('optionInFocus', optionInFocus)

        }
    }else if(event.key === 'ArrowDown'){

        if(optionInFocus < childrenElements.length){
            setOptionInFocus(++optionInFocus)
            console.log('optionInFocus', optionInFocus)

        }
    }else if(event.key === 'Enter'){
        if(showOptions){
            let infocus = childrenElements[optionInFocus]
            props.onChange({ currentTarget: { value: infocus.props.value, name: infocus.props.name } });
            setOptionVisibility(false)
        }
    }
  };

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

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>

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
