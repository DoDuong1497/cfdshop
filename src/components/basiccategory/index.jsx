import React from 'react'
import Button from '../button'
import { ArrowDown } from '../icon'
import './style.scss'

export default function BasicCategory({header}) {
    const caterogyItem = [
        {
            name: 'category Item'
        }
    ]
    return (
        <div className='category'>
            <h4 className='category__header'>{header}</h4>
            <ul>
                <li>
                    {caterogyItem.map(item => item.name)}
                </li>
                <li>
                    {caterogyItem.map(item => item.name)}
                </li>
                <li>
                    {caterogyItem.map(item => item.name)}
                </li>
                <li>
                    {caterogyItem.map(item => item.name)}
                </li>
                <li>
                    {caterogyItem.map(item => item.name)}
                </li>
            </ul>
            <Button color='bright' size='medium' type='icon-right' icon={<ArrowDown size='12'/>}>Button</Button>
        </div>
    )
}
