import React from 'react'
import QuoteHeader from './quoteHeader'
import QuoteScroll from './quoteScroll'
import QuoteSimple from './quoteSimple'

export default function Quote() {
    return (
        <section className="section-quote quote">
            <QuoteHeader>Section Headline</QuoteHeader>
            <QuoteSimple />
        </section>
    )
}
