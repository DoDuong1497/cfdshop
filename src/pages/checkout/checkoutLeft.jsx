import React from 'react'
import AdditionalInfo from './additionalInfo'
import BillingInfo from './billingInfo'
import BillingMethod from './billingMethod'
import './checkoutLeft.scss'
import Confirmation from './confirmation'
import PaymentMethod from './paymentMethod'

export default function CheckoutLeft() {
    return (
        <div className="checkout-left">
            <BillingInfo/>
            <BillingMethod/>
            <PaymentMethod />
            <AdditionalInfo />
            <Confirmation />
        </div>
    )
}
