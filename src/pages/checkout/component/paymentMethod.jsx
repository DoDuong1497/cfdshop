import React from 'react'
import CheckRadio from '../../../components/radio'
import BillingHeader from './billingHeader'
import imgCredit from '../../../assets/img/credit-img.svg'
import imgPaypal from '../../../assets/img/paypal-img.svg'
import imgBitcoin from '../../../assets/img/bitcoin-img.svg'
import './paymentMethod.scss'
import Input from '../../../components/input'


export const PaymentImage = ({urlImg}) => {
    return (
        <div className="payment-img">
            <img src={urlImg} alt=""/>
        </div>
    )
}

export default function PaymentMethod() {

    return (
        <div className='paymentMethod mr-bt'>
            <BillingHeader header='Payment method' desc='Please enter your payment method' paging='3'/>

            <div className="paymentMethod__wrap">
                <div className="paymentMethod__item">
                    <div className="paymentMethod__header">
                        <CheckRadio idRadio="cardCredit" nameRadio="Credit card" name="payment"/>
                        <PaymentImage urlImg={imgCredit}/>
                    </div>
                    <div className="paymentMethod__form">
                        <Input label='Card number' placeholder='Card number' size='full'/>

                        <div className="card-info">
                            <div className="card-info__item">
                                <Input label='Card number' placeholder='Card number' size='large'/>
                            </div>
                            <div className="card-info__item">
                                <Input label='Expiration date' placeholder='DD/MM/YY' size='small'/>
                                <Input label='CVC' placeholder='CVC' size='small'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="paymentMethod__wrap">
                <div className="paymentMethod__item">
                    <div className="paymentMethod__header">
                        <CheckRadio idRadio="payPal" nameRadio="PayPal" name="payment"/>
                        <PaymentImage urlImg={imgPaypal}/>
                    </div>
                </div>
            </div>

            <div className="paymentMethod__wrap">
                <div className="paymentMethod__item">
                    <div className="paymentMethod__header">
                        <CheckRadio idRadio="bitcoin" nameRadio="Bitcoin" name="payment"/>
                        <PaymentImage urlImg={imgBitcoin}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
