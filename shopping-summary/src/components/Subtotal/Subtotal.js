import React, { Component, Fragment } from "react";
import { ProductConsumer } from "../../context";

export default class Subtotal extends Component {
  render() {
    return (
      <Fragment>
        <ProductConsumer>
          {(value) => {
            return (
              <div className="subtotal">
                <h1>Subtotal :</h1>
                <h1>${value.subtotal}</h1>
              </div>
            );
          }}
        </ProductConsumer>
      </Fragment>
    );
  }
}
