import React from "react";

export default class ProductRow extends React.Component {
  render() {
    return (
      <tr>
        <td className={`px-4 py-2 ${this.props.stocked ? '' : 'text-red-500'}`}>{this.props.productName}</td>
        <td className="px-4 py-2">{this.props.productPrice}</td>
      </tr>
    );
  }
}
