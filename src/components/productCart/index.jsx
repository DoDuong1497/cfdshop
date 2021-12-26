import React from 'react'
import { CloseIcon, HeartIcon, PictureRightIcon, StarIcon } from '../icon'
import Input from '../input'
import './style.scss'

export default function ProductCart({img}) {
    return (
        <div className='productCart'>
            <div className="productCart__left">
                <div className="productCart__left-img">
                    <img src={img} alt="" />
                </div>
                <div className="productCart__left-action">
                    <div className="wishlist">
                        <HeartIcon size='12' color='#E6704B'/>
                        <p>Wishlist</p>
                    </div>
                    <div className="compare">
                        <PictureRightIcon size='12' color='#E6704B'/>
                        <p>Compare</p>
                    </div>
                    <div className="remove">
                        <CloseIcon size='12'/>
                        <p>Remove</p>
                    </div>
                </div>
            </div>
            <div className="productCart__right">
                <div className="productCart__right-info">
                    <h5>Product title</h5>
                    <div className="info__type">
                    <div className="info__type-title">
                        <p>Farm:</p>
                        <p>Freshness:</p>
                    </div>
                    <div className="info__type-name">
                        <p>Tharamis Farm</p>
                        <p>1 day old</p>
                    </div>
                    </div>
                    <div className="info__rating">
                        <StarIcon fill />
                        <StarIcon fill />
                        <StarIcon fill />
                        <StarIcon fill />
                        <StarIcon />
                    </div>
                    <div className="info__price">
                        <div className="info__price-left">
                            <h4>36.99 USD</h4>
                            <p>48.56 USD</p>
                        </div>
                        <div className="info__price-right">
                            <Input placeholder='1 pcs' max='3' select selectText='Psc'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
