import React from 'react'
import BannerSection from '../../components/bannerSection/bannerSection'
import Blog from '../../components/blog'
import ProductWCate from '../../components/productwCate/productwcate'
import Quote from '../../components/quote'
import './style.scss'

export default function Home() {
    return (
        <>
            <BannerSection/>
            <ProductWCate header='Best selling products'/>
            <ProductWCate header='Best from Farmers'/>
            <Quote />
            <Blog />
        </>
    )
}
