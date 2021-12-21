import React, { Component } from 'react'
import QuoteItem from './quoteItem'
import img from '../../assets/img/quote-avt.jpg'
import Slider from "react-slick";
import './style.scss'
import { ArrowLeft, ArrowRight } from '../icon';

export default class QuoteScroll extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }

    next() {
      this.slider.slickNext();
    }

    previous() {
      this.slider.slickPrev();
    }

    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        variableWidth: true,
        adaptiveHeight:true
      };

      return (
        <div className="quote-scroll">
          <div className="container-fluid">
            <div className='quote-scroll__slider'>
              <button className="btn btn-prev" onClick={this.previous}>
                <ArrowLeft size="32" color="#FDFDFD"/>
              </button>

              <Slider ref={c => (this.slider = c)} {...settings}>
                  <div style={{ width: 369 }}>
                      <QuoteItem name="Name and Surname" avatarUrl={img}>This is an super space for your customers qoute. Dont worry it works smooth as pie. You will get all what you need by writiing a text here 1</QuoteItem>
                  </div>
                  <div style={{ width: 369 }}>
                      <QuoteItem name="Name and Surname" avatarUrl={img}>This is an super space for your customers qoute. Dont worry it works smooth as pie. You will get all what you need by writiing a text here 2</QuoteItem>
                  </div>
                  <div style={{ width: 369 }}>
                      <QuoteItem name="Name and Surname" avatarUrl={img}>This is an super space for your customers qoute. Dont worry it works smooth as pie. You will get all what you need by writiing a text here 3</QuoteItem>
                  </div>
                  <div style={{ width: 369 }}>
                      <QuoteItem name="Name and Surname" avatarUrl={img}>This is an super space for your customers qoute. Dont worry it works smooth as pie. You will get all what you need by writiing a text here 4</QuoteItem>
                  </div>
                  <div style={{ width: 369 }}>
                      <QuoteItem name="Name and Surname" avatarUrl={img}>This is an super space for your customers qoute. Dont worry it works smooth as pie. You will get all what you need by writiing a text here 5</QuoteItem>
                  </div>
              </Slider>

              <button className="btn btn-next" onClick={this.next}>
                <ArrowRight size="32" color="#FDFDFD" />
              </button>
            </div>
          </div>
        </div>
        
      );
    }
  }
