import React from "react";
import BreadCum from "../../components/breadcum";
import CheckoutLeft from "./component/checkoutLeft";
import CheckoutRight from "./component/checkoutRight";
import './style.scss';

export default function Checkout() {
  return (
    <main className="checkout">
      <BreadCum />
      <div className="container">
        <div className="checkout__wrap">
          <CheckoutLeft/>
          <CheckoutRight/>
        </div>
      </div>
    </main>
  );
}
