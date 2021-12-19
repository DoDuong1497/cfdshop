import React from 'react'
import QuoteHeader from './quoteHeader'
import QuoteSimple from './quoteSimple'

export default function Quote() {
    return (
        <section className="section-quote">
            <div className="container">
                <QuoteHeader>Section Headline</QuoteHeader>
                <QuoteSimple />
            </div>
        </section>
    )
}
