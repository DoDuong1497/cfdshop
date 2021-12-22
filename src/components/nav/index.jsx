import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown } from '../icon'
import './style.scss'


export default function Nav() {
    return (
        <div className='header__nav'>
            <div className="container">
            <ul>
            <li>
                <Link to='blog'>
                Bakery
                <ArrowDown size='12'/>
                </Link>
            </li>
            <li>
            <Link to='blog'>
                Fruit and vegetables
                <ArrowDown size='12'/>
            </Link>

            </li>
            <li>
                <Link to='blog'>
                <p>Meat and fish</p>
                <ArrowDown size='12'/>
                </Link>
            </li>
            <li>
                <Link to='blog'>                
                <p>Drinks</p>
                <ArrowDown size='12'/>
                </Link>
            </li>
            <li>
                <Link to='blog'>
                <p>Kitchen</p>
                <ArrowDown size='12'/>
                </Link>
            </li>
            <li>
            <Link to='blog'>
                <p>Special nutrition</p>
                <ArrowDown size='12'/>
            </Link>    
            </li>
            <li>
            <Link to='blog'>
                <p>Baby</p>
                <ArrowDown size='12'/>
            </Link>    
            </li>
            <li>
            <Link to='blog'>
                <p>Pharmacy</p>
                <ArrowDown size='12'/>
            </Link>    
            </li>
            </ul>            
            </div>
        </div>
    )
}
