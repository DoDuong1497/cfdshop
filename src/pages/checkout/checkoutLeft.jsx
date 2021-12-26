import React from 'react'
import BillingInfo from './billingInfo'
import BillingMethod from './billingMethod'
import './checkoutLeft.scss'
import PaymentMethod from './paymentMethod'

export default function CheckoutLeft() {
    return (
        <div className="checkout-left">
            <BillingInfo/>
            <BillingMethod/>
            <PaymentMethod />
        </div>
    )
}
