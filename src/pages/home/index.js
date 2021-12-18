import React from 'react'
import BannerSection from './bannerSection'
import Productwcate from './productwcate'
import './style.scss'

export default function Home() {
    return (
        <div className='container'>
            <BannerSection/>
            <Productwcate header='Best selling products'/>
            <Productwcate header='Best from Farmers'/>
        </div>
    )
}
