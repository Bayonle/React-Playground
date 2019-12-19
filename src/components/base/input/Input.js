import React from "react";

class Input extends React.Component {
  render() {
    let type = this.props.type || "text";

    const getClass = () => {
      let defaultClass =
        "appearance-none w-full text-gray-700 leading-tight focus:outline-none";
      let size = this.props.size || "md";
      let sizeCss = "";

      let borderRadiusCss = 'rounded-sm'
      let paddingLeftCss = 'px-3'

      let variant = this.props.variant || "outline";
      let variantCss = "";

      let focusBorderColor =
        this.props.focusBorderColor || "focus:border-blue-600";

      if (size && size === "sm") {
        sizeCss = `py-1 text-xs`;
      }
      if (size && size === "md") {
        sizeCss = `py-2 text-sm`;
      } else if (size && size === "lg") {
        sizeCss = `py-4 text-base`;
      }

      //show border or not
      if (variant === "outline") {
        variantCss = "border";
      } else if (variant === "filled") {
        variantCss = "border border-transparent bg-gray-200";
      }else if(variant === 'flushed'){
          variantCss = "border-b"
          borderRadiusCss = ""
          paddingLeftCss = ""
      }else if(variant === 'unstyled'){
        paddingLeftCss = ""
      }

      return `${defaultClass} ${sizeCss} ${variantCss} ${focusBorderColor} ${borderRadiusCss} ${paddingLeftCss}`;
    };

    return (
      <input
        name={this.props.name}
        onChange={this.props.onChange}
        value={this.props.value}
        placeholder={this.props.placeholder}
        type={type}
        className={getClass()}
      />
    );
  }
}

export default Input;
