import React from 'react'
import './style.scss'

export default function CheckRadio({nameRadio, idRadio, name}) {
    return (
        <div className='checkRadio'>
            <div className="checkRadio-wrap">
                <input type="radio" id={idRadio} class="radio-input" name={name}/>
                <label for={idRadio} class="radio-label"></label>
            </div>
            <p className="name-radio">{nameRadio}</p>
        </div>
    )
}
