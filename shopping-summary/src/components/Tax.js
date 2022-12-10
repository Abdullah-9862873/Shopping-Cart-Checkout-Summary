import React, { Component } from "react";
import { ProductConsumer } from "../context";

export default class Tax extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { initialTax } = value;
          return (
            <div className="tax">
              <h1>Est. taxes & fees : </h1>
              <h1>${initialTax}</h1>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
