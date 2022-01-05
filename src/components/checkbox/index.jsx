import React from 'react'
import './style.scss'

export default function Checkbox({text,checked,error, onChange}) {
    return (
        <>
        <div className='checkbox-wrap'>
            <label className="checkbox">
                <input type="checkbox" checked={checked} onChange={onChange}/>
                <span></span>
            </label>
            <p>{text}</p>
        </div>
        <p className='input__error'>{error}</p>
        </>
    )
}
