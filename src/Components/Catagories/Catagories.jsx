import React from 'react'
import styles from "./Catagories.module.css"
import { useQuery } from 'react-query'
import axios from 'axios'
import SubCatagories from '../SubCatagories/SubCatagories'
import { BallTriangle } from 'react-loader-spinner'

export default function Catagories() {

  function getCatagories() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  }


  let { isLoading, data } = useQuery("FeaturedProducts", getCatagories)


  console.log(data)








  return (
    <>

      <div className=' container'>
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
      <div className="row g-4 py-5">
      {data?.data?.data?.map((ele) => <div key={ele._id} className="col-md-4  text-center">
        <div className="card product">
          <img src={ele.image} height={300} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text text-success fw-bold py-1 h3">{ele.name}</p>
            </div>
        </div>
      </div>)}

      

  </div>
        
      }
       
       <SubCatagories></SubCatagories>
    </div >

    </>
  )
}
