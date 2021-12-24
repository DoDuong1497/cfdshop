import React from 'react'
import './billingHeader.scss'

export default function BillingHeader({header, desc, paging}) {
    return (
        <div className='billing__header'>
         <h2>{header}</h2>
         <div className="header__desc">
             <p>{desc}</p>
             <p>Step {paging} of 5</p>
         </div>
        </div>
    )
}
