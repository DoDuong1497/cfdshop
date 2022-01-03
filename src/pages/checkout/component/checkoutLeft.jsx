import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import Button from '../../../components/button'
import AdditionalInfo from './additionalInfo'
import { BillingInfo } from './billingInfo'
// import BillingInfo from './billingInfo'
import BillingMethod from './billingMethod'
import './checkoutLeft.scss'
import Confirmation from './confirmation'
import PaymentMethod from './paymentMethod'

export const CheckoutLeft = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => {
        return {
            billingInfo
        }
    }, [])
    const billinginforef = useRef()
    const billingInfo = () => {

        const errorObj = billinginforef.current?.validate()

        console.log(errorObj)
    }
    return (
        <div className="checkout-left">
            <BillingInfo ref={billinginforef}/>
            <BillingMethod/>
            <PaymentMethod />
            <AdditionalInfo />
            <Confirmation />
        </div>
    )
})
