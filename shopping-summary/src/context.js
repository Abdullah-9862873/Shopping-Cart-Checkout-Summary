import React, { Component, useState } from "react";
import Promo from "./components/Promo";
import itemDetail from "./components/ItemDetail";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    subtotal: 100,
    pickupSavings: 3.85,
    initialTax: 8.41,
    totalTax: 104.56,
    promoOpen: false,
    promo: [],
    promoButtonText: "Apply promo code +",
    itemOpen: false,
    item: [],
    itemButtonText: "See item details +",
    promoButtonClick: false,
    promoCodeValueInput: "",
  };
  showDetails = (itemOpen) => {
    if (!itemOpen) {
      this.setState({
        itemOpen: true,
        item: itemDetail,
        itemButtonText: "Hide item details",
      });
    } else {
      this.setState({
        itemOpen: false,
        item: [],
        itemButtonText: "Show item details",
      });
    }
  };
  showPromoCode = (promoOpen) => {
    if (!promoOpen) {
      this.setState({
        promoOpen: true,
        promo: Promo,
        promoButtonText: "Hide promo code",
      });
    } else {
      this.setState({
        promoOpen: false,
        promo: [],
        promoButtonText: "Apply promo code +",
      });
    }
  };
  giveDiscount = () => {
    this.setState({
      totalTax: 94.11,
    });
  };
  giveBigDiscount = () => {
    this.setState({
      totalTax: 80,
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          showDetails: this.showDetails,
          showPromoCode: this.showPromoCode,
          giveDiscount: this.giveDiscount,
          giveBigDiscount: this.giveBigDiscount,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
