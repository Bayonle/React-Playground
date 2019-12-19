import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default class ProductTable extends React.Component {
  renderProducts = (section, index) => {
    const { category } = section;
    return (
      <React.Fragment key={index}>
        <ProductCategoryRow category={category} />
        {section.products.map(product => {
          const { name, price, stocked } = product;
          return (
            <ProductRow productName={name} productPrice={price} stocked={stocked} key={name} />
          );
        })}
      </React.Fragment>
    );
  };

  render() {
    const getfilteredProduct = () => {
      //copy existing products
      const productsCopy = [...this.props.products];
      let filtered = productsCopy;
      if (this.props.showProductsInStock) {
        filtered = filtered.filter(x => x.stocked);
      }

      filtered = filtered.filter(
        product =>
          product.name
            .toLowerCase()
            .indexOf(this.props.searchText.toLowerCase()) !== -1
      );
      return filtered;
    };

    const getGroupedProducts = () => {
      //get distinct categories
      let filteredProducts = getfilteredProduct();
      let categories = filteredProducts.map(x => x.category); // ['sports', 'electronics']
      let uniqueCategories = [...new Set(categories)];
      const formattedProducts = [];
      uniqueCategories.forEach(category => {
        //get products in this category
        const products = filteredProducts.filter(
          product => product.category === category
        );
        formattedProducts.push({ category, products });
      });
      return formattedProducts || [];
    };

    if(getGroupedProducts().length === 0){
      return <p className="text-center">No products match your search criteria</p>
    }

    return (
      <table className="w-full align-left mt-4">
        <thead>
          <tr>
            <th className="font-medium uppercase text-sm tracking-wide text-left px-4 py-2">
              Name
            </th>
            <th className="font-medium uppercase text-sm tracking-wide text-left px-4 py-2">
              Price
            </th>
          </tr>
        </thead>

        <tbody>
          {getGroupedProducts().map((section, index) => this.renderProducts(section, index))}
        </tbody>
      </table>
    );
  }
}
