import React from 'react'
import BillingHeader from './billingHeader'
import './additionalInfo.scss'
import Button from '../../../components/button'

export default function AdditionalInfo() {
    return (
        <div className='additionalInfo mr-bt'>
            <BillingHeader header='Additional informations' desc='Need something else? We will make it for you!' paging='4'/>

            <div className="additionalInfo-wrap">
                <label>Order notes</label>
                <textarea name="note" id="orderNote" rows="10" placeholder="Need a specific delivery day? Sending a gitf? Let's say ..."></textarea>
            </div>

            <Button color='colored' size='small'>Submit</Button>
        </div>
    )
}
