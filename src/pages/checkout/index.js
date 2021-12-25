import React from "react";
import BreadCum from "../../components/breadcum";
import MainLayout from "../../layout/mainlayout";
import CheckoutLeft from "./checkoutLeft";
import CheckoutRight from "./checkoutRight";
import './style.scss'

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
