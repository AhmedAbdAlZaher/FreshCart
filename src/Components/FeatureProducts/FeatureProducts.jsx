import React, { useEffect, useState } from 'react'
import styles from "./FeatureProducts.module.css"
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner'
import { useQuery } from 'react-query'


export default function FeatureProducts() {


function getProduct(){
  return axios.get("https://ecommerce.routemisr.com/api/v1/products")
}

  let {isLoading,data,isError} = useQuery("FeaturedProducts" , getProduct)


  // let [isLoading, setIsLoading] = useState(true)
  // let [products, setProducts] = useState([])
  // async function getProduct() {
  //   let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products")
  //   setProducts(data.data);
  //   setIsLoading(false)
  // }

  // useEffect(() => {
  //   getProduct()
  // }, [])

  return (
    <>
      <div className="container py-5">
        {isLoading ?


          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={'justify-content-center'}
            wrapperStyle=""
            visible={true}
          />

          : <div className="row">

            {data?.data?.data?.map((ele) => <div key={ele.id} className="col-md-2">
              <div className="product px-2 py-3">
                <img className='w-100' src={ele.imageCover} alt={ele.title} />
                <p className='text-main'>{ele.category.name}</p>
                <h3 className='h6'>{ele.title.split(" ").slice(0, 3).join(" ")}</h3>
                <div className="d-flex justify-content-between">
                  <p>{ele.price} EGP</p>
                  <p>
                    <i className='fa fa-star rating-color'></i>
                    {ele.ratingsAverage}
                  </p>

                </div>
                <button className='btn bg-main text-white w-100'>Add to Cart</button>
              </div>
            </div>)}

          </div>}

      </div>

    </>
  )
}
