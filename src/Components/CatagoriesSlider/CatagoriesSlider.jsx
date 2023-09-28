import React from 'react'
import styles from "./CatagoriesSlider.module.css"
import axios from 'axios'
import { useQuery } from 'react-query'
import Slider from 'react-slick'



export default function CatagoriesSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true
  }
  function getCatagories(){
return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

let {data} = useQuery("allCatagories" , getCatagories)
console.log(data)
  return (
   <>
   <div className=' container'>
   <Slider {...settings}>
    {data?.data?.data.map((ele)=><>
    <img  height={250} className='w-100' src={ele.image} alt="" />
    <h4 className='h3'>{ele.name}</h4>
    </>)}
   </Slider>
   </div>
   
   </>
  )
}
