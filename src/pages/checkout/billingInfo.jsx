import React from 'react'
import Input from '../../components/input'
import BillingHeader from './billingHeader'
import './billingInfo.scss'

export default function BillingInfo() {
    return (
        <div className='billing__info'>
            <BillingHeader header='Billing Info' desc='Please enter your billing info' paging='1'/>
            <div className="billing__info-wrap">
                <div className="billing__info-left">
                    <Input label='First Name' placeholder='First name' size='medium'/>
                    <Input label='Email address' placeholder='Email address' size='medium'/>
                    <Input label='Address' placeholder='Address' size='medium'/>
                    <Input label='State / Country' placeholder='State / Country' size='medium'/>
                </div>
                <div className="billing__info-right">
                    <Input label='Last Name' placeholder='Last name' size='medium'/>
                    <Input label='Phone number' placeholder='Phone number' size='medium'/>
                    <Input label='Town / City' placeholder='Town city' size='medium'/>
                    <Input label='ZIP/Postal code' placeholder='Postal code or ZIP' size='medium'/>
                </div>
            </div>
        </div>
    )
}