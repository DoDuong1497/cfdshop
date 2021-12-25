import classNames from 'classnames'
import React from 'react'
import './style.scss'

export default function Input({label, placeholder, size, max='50'}) {
    return (
        <div className='input__wrap'>
            <label>{label}</label>
            <div className={classNames('input', `size-${size}`)}>
                <input type="text" placeholder={placeholder} maxlength={max}/>
            </div>
        </div>
    )
}
