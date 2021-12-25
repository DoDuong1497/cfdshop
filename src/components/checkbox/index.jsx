import React from 'react'
import './style.scss'

export default function Checkbox({text}) {
    return (
        <div className='checkbox-wrap'>
            <label className="checkbox">
            <input type="checkbox" />
            <span></span>
            </label>
            <p>{text}</p>
        </div>
    )
}
