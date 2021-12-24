import React from 'react'
import { SelectIcon } from '../icon'
import './style.scss'

export default function Select({label, placeholder}) {
    return (
        <div className="select">
            <label>{label}</label>
        <div className='textfield'>
            <p>{placeholder}</p>
            <SelectIcon size='16'/>
        </div>
        </div>
    )
}
