import React from 'react'
import HeadingSection from '../heading-section'
import QuoteScroll from './quoteScroll'
import QuoteSimple from './quoteSimple'

export default function Quote() {
    return (
        <section className="section-quote quote">
            <HeadingSection heading="Section Headline">Button</HeadingSection>
            <QuoteSimple />
        </section>
    )
}
