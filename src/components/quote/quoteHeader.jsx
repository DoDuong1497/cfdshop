import React from 'react'
import Button from '../button'
import { ArrowDown } from '../icon'

export default function QuoteHeader({children}) {
    return (
        <div className="quote-header">
            <h4 className="heading --h4">{children}</h4>
            <Button type="icon-right">
                Button
                <ArrowDown size="16"/>
            </Button>
        </div>
    )
}
