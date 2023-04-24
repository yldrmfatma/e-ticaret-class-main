//// home sayfasındaki slider i yapacağımız yer
import React, { useEffect, useState } from 'react'
import "./Slider.scss"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { sliderData } from './slider-data'

const Slider = () => {
  const [currentSlide, setCurretSlide] = useState(0)
  const slideLenght = sliderData.lenght
  let autoScroll = true;
  let intervalTime = 5000;
  const nextSlide = () => {
    setCurretSlide(currentSlide === slideLenght - 1 ? 0 : currentSlide + 1)
  }
  const prevSlide = () => {
    setCurretSlide(currentSlide === 0 ? slideLenght - 1 : currentSlide - 1)
  }
  useEffect(() => {
    setCurretSlide(0)
  }, [])
  useEffect(() => {
    let slideInterval;
    if (autoScroll) {
      slideInterval = setInterval(() => {
        setCurretSlide(currentSlide === slideLenght - 1 ? 0 : currentSlide + 1)
      }, intervalTime)
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide, autoScroll, intervalTime, slideLenght])
return (
  <div className="slider">
    <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
    <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
    {sliderData.map((slide, index) => {
      const { image, heading, desc } = slide
      return (
        <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
          {index === currentSlide && (
            <>
              <img src={image} alt="slide" />
              <div className="content" >
                <h2>{heading}</h2>
                <p>{desc}</p>
                <hr />
                <a href="#product" className="--btn --btn-primary" >
                  Shop Now
                </a>
              </div>
            </>
          )
          }
        </div>
      )
    })}

  </div>
)
}

export default Slider