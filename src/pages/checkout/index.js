import React, { useRef } from "react";
import BreadCum from "../../components/breadcum";
import Button from "../../components/button";
import {CheckoutLeft} from "./component/checkoutLeft";
import CheckoutRight from "./component/checkoutRight";
import './style.scss';

export default function Checkout() {
  const validateLeft = useRef()
  
  const submit = () => {
    validateLeft.current?.billingInfo()
  }
  return (
    <main className="checkout">
      <BreadCum />
      <div className="container">
        <div className="checkout__wrap">
          <CheckoutLeft ref={validateLeft}/>
          <CheckoutRight/>
        </div>
        <Button onclick={submit} color='colored' size='small'>check</Button>
      </div>
    </main>
  );
}
