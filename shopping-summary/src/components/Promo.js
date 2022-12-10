import React, { useState, useEffect } from "react";
import { ProductConsumer } from "../context";

export default function Promo({ value }) {
  const { giveDiscount, giveBigDiscount } = value;
  const [change, setChange] = useState("");
  const [updated, setUpdated] = useState(change);

  const handleChange = (event) => {
    setChange(event.target.value);
  };

  const handleClick = () => {
    setUpdated(change);
  };

  useEffect(() => {
    if (updated == "DISCOUNT") {
      giveDiscount();
    }
  });
  useEffect(() => {
    if (updated == "BIGDISCOUNT") {
      giveBigDiscount();
    }
  });

  return (
    <ProductConsumer>
      {(value) => {
        const { promoOpen, applyPromoCode } = value;
        if (!promoOpen) {
          return null;
        } else {
          return (
            <div className="promoContainer">
              <h3>Promo Code</h3>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Enter Promo Code"
              />
              <button type="submit" onClick={handleClick}>
                Apply
              </button>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
}
