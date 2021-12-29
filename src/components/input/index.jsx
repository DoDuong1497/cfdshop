import classNames from 'classnames'
import React from 'react'
import { ArrowDown } from '../icon'
import './style.scss'

export default function Input({children, label, placeholder, size, max='50', select, selectText, valid, error}) {
    return (
        <div className='input__wrap'>
            <label>{label}</label>
            <div className={classNames('input', `size-${size}`, `${select ? 'select' : ''}`)}>
                <input type="text" placeholder={placeholder} maxlength={max} {...valid}/>
                {children}
                {select ?
                <div className="input__select">
                    <p>{selectText}</p>
                    <ArrowDown size='12' color='#000' />
                </div>
                :''}
            </div>
            <p className='input__error'>{error}</p>
        </div>
    )
}
