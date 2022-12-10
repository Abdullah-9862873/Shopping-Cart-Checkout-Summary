import React, { Component, Fragment } from "react";
import { ProductConsumer } from "../context";
import Subtotal from "./Subtotal/Subtotal";
import PickupSavings from "./PickupSavings";
import Tax from "./Tax";
import TotalTax from "./TotalTax";
import Promo from "./Promo";
import ItemDetail from "./ItemDetail";

export default class Main extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            showDetails,
            showPromoCode,
            promoButtonText,
            promoOpen,
            itemOpen,
            itemButtonText,
          } = value;
          const activeBoth = itemOpen && promoOpen;
          const activeOne = itemOpen || promoOpen;

          return (
            <div className="container">
              <div
                className={
                  activeBoth
                    ? `fullcard`
                    : activeOne
                    ? `cardWithOne`
                    : `normalcard`
                }
              >
                <Subtotal value={value} />
                <PickupSavings value={value} />
                <Tax value={value} />
                <div className="total">
                  <TotalTax value={value} />
                  <a
                    className="my-button"
                    href="#"
                    onClick={() => showDetails(itemOpen)}
                  >
                    {itemButtonText}
                  </a>
                  <ItemDetail />
                </div>
                <div className="promoDiv">
                  <a
                    className="my-button"
                    href="#"
                    onClick={() => showPromoCode(promoOpen)}
                  >
                    {promoButtonText}
                  </a>
                  <Promo value={value} />
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
