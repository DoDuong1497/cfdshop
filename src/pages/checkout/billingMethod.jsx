import React from 'react'
import BillingHeader from './billingHeader'
import './billingMethod.scss'

export default function BillingMethod() {
    return (
        <div className='billingMethod'>
            <BillingHeader header='Billing method' desc='Please enter your payment method' paging='2'/>
        </div>
    )
}
