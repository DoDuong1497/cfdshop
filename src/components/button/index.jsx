import React from 'react'
import classNames from 'classnames';
import './style.scss'

export default function Button({children, color='simple',type='default', size='small', icon, onclick, typebutton=''}) {
    return (
        <button type={typebutton} onClick={onclick} className={
            classNames('button',`color-${color}`,`type-${type}`,`size-${size}`)
            }>
            {type === 'icon-left' && icon}
            {children}
            {type === 'icon-right' && icon}
        </button>
    )
}
