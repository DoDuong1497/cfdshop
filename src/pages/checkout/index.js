import React from "react";
import BreadCum from "../../components/breadcum";
import MainLayout from "../../layout/mainlayout";
import CheckoutLeft from "./checkoutLeft";

export default function Checkout() {
  return (
    <main className="checkout">
      <BreadCum />
      <div className="checkout__wrap">
          <CheckoutLeft/>
      </div>
    </main>
  );
}
