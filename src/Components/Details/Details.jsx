import React ,{useEffect ,useState} from 'react'
import styles from "./Details.module.css"
import { BallTriangle } from 'react-loader-spinner'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import Slider from 'react-slick'

export default function Details() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }
let params = useParams()

const [details ,setDetails] =useState({})
const [isLoading ,setIsLoading] =useState(true)


 async function getProductDetails(id){
   let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
     setDetails(data.data)
     setIsLoading(false)
    }
  
useEffect(()=>{
  getProductDetails(params.id)
} ,[])

  
    // let { data , isLoading,isError,} = useQuery("details",()=>getProductDetails(params.id))

  return (
<>
<div className=" container ">
  {isLoading ?   <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={'justify-content-center'}
            wrapperStyle=""
            visible={true}
          />
        : 
        
        
        <div className="row align-items-center">
        <div className="col-md-4">
        <Slider {...settings}>
    {details.images.map((ele,index)=><img key={index} src={ele} alt=''/>)}
    </Slider>
        </div>
        <div className="col-md-8">
          <h2>{details.title}</h2>
          <p>{details.description}</p>
          <p>{details.category.name}</p>
          <div className=' d-flex justify-content-between'>
            <h5>{details.price} EGP</h5>
            <h5><i className='fa fa-star rating-color'></i> {details.ratingsAverage}</h5>
          </div>
          <button className='btn bg-main text-white w-100'>Add to Cart</button>   
           </div>
      </div>


        }
  
</div>

</>  )
}
