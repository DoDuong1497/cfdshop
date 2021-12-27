import React from 'react'
import imgDhl from '../../../assets/img/logo-transport-dhl.svg'
import imgFed from '../../../assets/img/logo-transport-fedex.svg'
import Button from '../../../components/button'
import CheckRadio from '../../../components/radio'
import BillingHeader from './billingHeader'
import './billingMethod.scss'

export const PriceNumber = ({children}) => {
    return (
        <span className="price__number">{children}</span>
    )
}


export const TransportersLogo = ({urlLogo}) => {
    return (
        <div className="transporters-logo">
            <img src={urlLogo} alt=""/>
        </div>
    )
}



export default function BillingMethod() {
    return (
        <div className='billingMethod mr-bt'>
            <BillingHeader header='Billing method' desc='Please enter your payment method' paging='2'/>

            <div className="billingMethod__wrap">
                <div className="billingMethod__item">
                    <CheckRadio idRadio="shipFedEx" nameRadio="FedEx" name="shipUnit"/>
                    <div className="price">
                        <PriceNumber>+32 USD</PriceNumber>
                        <span className="price__additional">Additional price</span>
                    </div>
                    <TransportersLogo urlLogo={imgFed}/>
                </div>

                <div className="billingMethod__item">
                    <CheckRadio idRadio="shipDHL" nameRadio="DHL" name="shipUnit"/>
                    <div className="price">
                        <PriceNumber>+16 USD</PriceNumber>
                        <span className="price__additional">Additional price</span>
                    </div>
                    <TransportersLogo urlLogo={imgDhl}/>
                </div>
            </div>

            <Button color='colored' size='small'>Submit</Button>
        </div>
    )
}
