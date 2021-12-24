import React from 'react'
import BillingInfo from './billingInfo'
import BillingMethod from './billingMethod'

export default function CheckoutLeft() {
    return (
        <>
        <div className="container">
            <BillingInfo/>
            <BillingMethod/>
        </div>
        </>
    )
}
