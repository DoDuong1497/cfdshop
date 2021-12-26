import React from 'react'
import ProductCart from '../../components/productCart'
import BillingHeader from './billingHeader'
import './checkoutRight.scss'

export default function CheckoutRight() {
    return (
        <div className="checkout-right">
            <BillingHeader header='Order Summary' desc='Price can change depending on shipping method and taxes of your state.'/>
            <div className="checkout-right-product">
                <ProductCart />
                <ProductCart />
            </div>
        </div>
    )
}
