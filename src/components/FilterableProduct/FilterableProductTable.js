import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import products from "../../data/products";

export default class FilterableProductTable extends React.Component {
  state = {
    searchText: "",
    showProductsInStock: false
  };

  updateInput = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {

    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="table w-1/4 border border-grey-300 px-6 py-4 rounded">
          {/* searchBar here */}

          <SearchBar
            searchText={this.state.searchText}
            showProductsInStock={this.state.showProductsInStock}
            updateInput={this.updateInput}
          />
          <ProductTable
            products={products}
            searchText={this.state.searchText}
            showProductsInStock={this.state.showProductsInStock}

          />
        </div>
      </div>
    );
  }
}
