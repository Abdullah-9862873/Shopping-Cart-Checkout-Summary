import React, { Component } from "react";
import { ProductConsumer } from "../context";

export default class TotalTax extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { totalTax } = value;
          return (
            <div className="totalTax">
              <h1>Est. Total :</h1>
              <h1>${totalTax}</h1>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
