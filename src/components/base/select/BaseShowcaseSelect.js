import React from "react";
import Select from "./Select";
import Option from "./Option";

class BaseShowcaseSelect extends React.Component {
  state = {
    country: ""
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="w-full h-full px-32 py-16">
        <h1 className="text-lg text-2xl font-bold">Select</h1>
        Selected - {this.state.country}
        <div className="w-1/4">
          <Select
            onChange={this.handleChange}
            name="country"
            value={this.state.country}
            placeholder="Select your country"
          >
            <Option value="NG">Nigeria</Option>
            <Option value="CU">Cuba</Option>
            <Option value="NM">Namibia</Option>
            <Option value="ML">Mali</Option>
          </Select>

        </div>

      </div>
    );
  }
}

export default BaseShowcaseSelect;
