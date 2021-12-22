import React from 'react'
import './style.scss'

export default function BreadCum({prev='Homepage', current='Checkout Page'}) {
    return (
        <div className='container'>
            <div className="breadcum">
            <p className="prev">{prev}</p>
            <p className="line">/</p>
            <p className="current">{current}</p>
            </div>
        </div>
    )
}
