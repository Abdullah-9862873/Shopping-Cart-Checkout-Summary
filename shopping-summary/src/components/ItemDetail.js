import React, { Component, Fragment } from "react";
import image from "../image.jpg";
import { ProductConsumer } from "../context";

export default class itemDetail extends Component {
  render() {
    return (
      <Fragment>
        <ProductConsumer>
          {(value) => {
            const { totalTax, itemOpen } = value;
            if (!itemOpen) {
              return null;
            } else {
              return (
                <div className="detail">
                  <div className="image">
                    <img src={image} alt="product" />
                  </div>
                  <div className="description">
                    <p>
                      Essentials by OFM ESS-3085 Racing Style Leather Gaming
                      Chair, Red
                    </p>
                    <div className="values">
                      <h3>${totalTax}</h3>
                      <h3>Qty: 1</h3>
                    </div>
                  </div>
                </div>
              );
            }
          }}
        </ProductConsumer>
      </Fragment>
    );
  }
}
