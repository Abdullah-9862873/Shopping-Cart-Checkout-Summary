import React, { useState } from "react";
import { ProductConsumer } from "../context";

const [change, setChange] = useState("");
const handleChange = (event) => {
  setChange(event.target.value);
};
const [updated, setUpdated] = useState(change);
const handleClick = () => {
  setUpdated(change);
};

export default function Promo() {
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

// import React, { Component, useState } from "react";
// import { ProductConsumer } from "../context";

// const [change, setChange] = useState("");
// const handleChange = (event) => {
//   setChange(event.target.value);
// };
// const [updated, setUpdated] = useState(change);
// const handleClick = () => {
//   setUpdated(change);
// };

// export default class Promo extends Component {
//   render() {
//     return (
//       <ProductConsumer>
//         {(value) => {
//           const { promoOpen, applyPromoCode } = value;
//           if (!promoOpen) {
//             return null;
//           } else {
//             return (
//               <div className="promoContainer">
//                 <h3>Promo Code</h3>
//                 <input
//                   onChange={handleChange}
//                   type="text"
//                   placeholder="Enter Promo Code"
//                 />
//                 <button type="submit" onClick={handleClick}>
//                   Apply
//                 </button>
//               </div>
//             );
//           }
//         }}
//       </ProductConsumer>
//     );
//   }
// }
