import React from 'react'
import Button from '../../../components/button'
import Input from '../../../components/input'
import ProductCart from '../../../components/productCart'
import BillingHeader from './billingHeader'
import './checkoutRight.scss'

export default function CheckoutRight() {

    const CheckoutFee = ({subtotal, tax, shipping, number}) => {
        return (
            <div className='fee__item'>
            {subtotal?<p>Subtotal</p>: ''}
            {tax?<p>Tax</p>: ''}
            {shipping?<p>Shipping</p>: ''}
            <p className='fee__number'>{tax?'17%' : ''} {number} USD</p>
            </div>
        )
    }
    const PromoInput = () => {
        return (
            <Input placeholder='Apply promo code'>
                <Button>Apply now</Button>
            </Input>
        )
    }

    const Total = ({numb}) => {
        return(
            <div className="checkout__right-total">
                <div className="total-left">
                    <h6>Total Order</h6>
                    <p>Guaranteed delivery day:  June 12, 2020</p>
                </div>
                <div className="total-right">
                    <h2>{numb} USD</h2>
                </div>
            </div>
        )
    }
    
    return (
        <div className="checkout__right">
            <BillingHeader header='Order Summary' desc='Price can change depending on shipping method and taxes of your state.'/>
            <div className="checkout__right-product">
                <ProductCart />
                <ProductCart />
            </div>
            <div className="checkout__right-fee">
                <CheckoutFee subtotal number='73.98'/>
                <CheckoutFee tax number='16.53'/>
                <CheckoutFee shipping number='0'/>
            </div>
            <PromoInput/>
            <Total numb='89.84'/>
        </div>
    )
}
