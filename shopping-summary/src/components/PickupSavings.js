import React, { Component } from "react";
import { ProductConsumer } from "../context";
export default class PickupSavings extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { pickupSavings } = value;
          return (
            <div className="pickupSavings">
              <div class="btn btn-primary tooltip">
                <span>Pickup savings :</span>
                <div class="bottom">
                  <h3>Tip:</h3>
                  <p>
                    Picking up your order in the store helps cut costs, and we
                    pass the savings on to you.
                  </p>
                  <i></i>
                </div>
              </div>
              <div className="pickupSavings-value">
                <h1>$-{pickupSavings}</h1>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
