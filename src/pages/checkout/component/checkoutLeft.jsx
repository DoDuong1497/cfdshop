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

        billinginforef.current?.validate()
        console.log(billinginforef.current?.form)
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
