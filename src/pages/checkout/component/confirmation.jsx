import React from 'react'
import Button from '../../../components/button'
import Checkbox from '../../../components/checkbox'
import { SafeIcon } from '../../../components/icon'
import BillingHeader from './billingHeader'
import './confirmation.scss'

export default function Confirmation() {
    return (
        <div  className='confirmation mr-bt'>
            <BillingHeader header='Confirmation' desc='We are getting to the end. Just few clicks and your order si ready!' paging='5'/>

            <div className="confirmation-wrap">
                <div className="confirmation-check">
                    <Checkbox text='I agree with sending an Marketing and newsletter emails. No spam, promissed!' />
                    <Checkbox text='I agree with our terms and conditions and privacy policy.' />
                </div>

                <Button color='colored' size='large'>Complete order</Button>

                <div className="safe-group">
                    <div className="safe-group__icon">
                        <SafeIcon size='32'/>
                    </div>
                    <div className="safe-group__content">
                        <p className="safe-group__title">All your data are safe</p>
                        <p className="safe-group__text">We are using the most advanced security to provide you the best experience ever.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
