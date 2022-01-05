import classNames from 'classnames'
import React, { useState } from 'react'
import { SelectIcon } from '../icon'
import './style.scss'

export default function Select({label, }) {
    const city = ['State / Country'] 

    const [indexSelect, setIndexSelect] = useState(0)

    const [isOpen, setIsOpen] = useState(false)

    const [isChange, setisChange] = useState(false)

    const handleSelect = (i) => {
        
        setIndexSelect(i)
    }
    const handleIsOpen = () => {
        !isOpen ? setIsOpen(true) : setIsOpen(false)
    }

    return (
        <div className="select">
            <label>{label}</label>
            <div className='textfield' onClick={handleIsOpen}>
                <p className={isOpen ? '--acitve' : null}>{city[indexSelect]}</p>
                <SelectIcon size='16'/>
            </div>
            <div className={classNames('select__option', {isOpen})}>
                <ul>
                    {city.map((item,i)=>{
                        if(i > 0){
                            return <li onClick={() => handleSelect(i)}> {item} </li>
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}
