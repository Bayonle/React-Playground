import React from "react";

export default class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <td colSpan="2" className="font-semibold px-4 py-2">{this.props.category}</td>
      </tr>
    );
  }
}
