import React from "react";
import Input from "./Input";
import Spacer from "../Spacer";
import InputGroup from "./InputGroup";
import InputAddon from "./InputAddon";

class BaseShowcaseInput extends React.Component {
  state = {
    firstName: "",
    address: ''
  };

  handleChange = (event) => {
    const {name, value} = event.currentTarget;

    this.setState({
        [name]: value
    })

  }

  render() {
    return (
      <div className="w-full h-full px-32 py-16">
        <h1 className="text-lg text-2xl font-bold">Input</h1>

        <h3 className="mt-6">Controlled Inputs</h3>
        <label htmlFor="firstName" className="mt-4 block">
            First Name: <span className="font-bold">{this.state.firstName}</span>
        </label>
        <Input
          placeholder="First name"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <Spacer height="10px" />
        <label htmlFor="firstName">
            Address: <span className="font-bold">{this.state.address}</span>
        </label>
        <Input
          placeholder="Address"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
        />



        <h3 className="text-lg font-medium mt-5">Size</h3>
        <Input placeholder="small" size="sm" />
        <Spacer height="10px" />
        <Input placeholder="default" size="md" />
        <Spacer height="10px" />
        <Input placeholder="large" size="lg" />

        <h3 className="text-lg font-medium mt-5">Focus Border Color</h3>
        <Input
          placeholder="focus:border-red-500"
          focusBorderColor="focus:border-red-500"
        />

        <h3 className="text-lg font-medium mt-5">Variants</h3>
        <Input placeholder="Outline" variant="outline" />
        <Spacer height="10px" />
        <Input placeholder="filled" variant="filled" />
        <Spacer height="10px" />
        <Input placeholder="Flushed" variant="flushed" />
        <Spacer height="10px" />
        <Input placeholder="Unstyled" variant="unstyled" />

        <h3 className="text-lg font-medium mt-5">Addon</h3>
        <InputGroup>
          <InputAddon children="+234" size="lg" />
          <Input placeholder="addon on the left" size="lg" />
        </InputGroup>
        <Spacer height="10px" />
        <InputGroup>
          <Input placeholder="addon on the right" size="lg" />
          <InputAddon children="+234" size="lg" />
        </InputGroup>

        <Input placeholder="Unstyled" variant="unstyled" />
      </div>
    );
  }
}

export default BaseShowcaseInput;
