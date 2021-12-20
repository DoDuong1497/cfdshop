import React from 'react'
import Button from '../button'
import { ArrowDown } from '../icon'

export default function QuoteHeader({children}) {
    return (
        <div className="quote-header">
            <div className="container">
                <div className="quote-header__wrap">
                    <h4 className="heading --h4">{children}</h4>
                    <Button type="icon-right">
                        Button
                        <ArrowDown size="16"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}
