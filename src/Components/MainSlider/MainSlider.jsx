import React from 'react'
import styles from "./MainSlider.module.css"
import MainImage1 from "../../../src/Assets/images/Slider/slider-image-1.jpeg"
import MainImage2 from "../../../src/Assets/images/Slider/slider-image-2.jpeg"
import MainImage3 from "../../../src/Assets/images/Slider/slider-image-3.jpeg"
import blog1 from "../../../src/Assets/images/Slider/grocery-banner-2.jpeg"

import blog2 from "../../../src/Assets/images/Slider/grocery-banner.png"
import Slider from 'react-slick'


export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false
  }
  return (
   <>
   <div className="container my-5">
    <div className="row gx-0">
      <div className="col-md-9">
      <Slider {...settings}>
        <img height={400} src={MainImage1} alt="" />
        <img  height={400} src={MainImage2} alt="" />
        <img height={400} src={MainImage3} alt="" />
        </Slider>

      </div>
      <div className="col-md-3">
        <img height={200} className='w-100' src={blog1} alt="" />
        <img  height={200} className='w-100' src={blog2} alt="" />
      </div>
    </div>
   </div>
   </>
  )
}
