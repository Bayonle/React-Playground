import React from "react";

export default class SearchBar extends React.Component {
  handleChange = event => {
    const target = event.currentTarget;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.props.updateInput(name, value);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="searchText"
          value={this.props.searchText}
          onChange={this.handleChange}
          onKeyPress={this.props.filterProduct}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label htmlFor="showProductsInStock" className="block mt-2">
          <input
            type="checkbox"
            name="showProductsInStock"
            id="showProductsInStock"
            className="mr-2"
            checked={this.props.showProductsInStock}
            onChange={this.handleChange}
          />
          Only show products in stock
        </label>
      </div>
    );
  }
}
