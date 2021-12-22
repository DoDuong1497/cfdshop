import React from 'react'
import Category from '../category'
import Product from '../product'
import './productWCate.scss'

export default function ProductWCate({header}) {
    const price = [
    {
        price: '1.48'
    }

]
    return (
        <section className='productwcate'>
            <div className="container">
                 <Category header={header} button='More products'/>
                <Product price={price.map(price => price.price)}/>
                <Product price={price.map(price => price.price)} discount='- 36 %'/>
                <Product price={price.map(price => price.price)} discount='- 36 %'/>
            </div>
        </section>
    )
}
