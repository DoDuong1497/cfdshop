import React from 'react'
import BillingInfo from './billingInfo'
import BillingMethod from './billingMethod'
import './checkoutLeft.scss'

export default function CheckoutLeft() {
    return (
        <div className="checkout-left">
            <BillingInfo/>
            <BillingMethod/>
        </div>
    )
}
