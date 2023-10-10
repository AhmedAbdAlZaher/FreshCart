import React, { useContext, useEffect, useState } from 'react'
import styles from "./Catagories.module.css"
import { useQuery } from 'react-query'
import axios from 'axios'
import SubCatagories from '../SubCatagories/SubCatagories'
import { BallTriangle } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { CataContext } from '../../context/CataContext'

export default function Catagories() {

  const [allCatagories, setAllCatagories] = useState(null)
  const [subCatagories, setSubCatagories] = useState(null)
  let { getAllCatagories , getSubCatagories } = useContext(CataContext)

  async function getAllCartDetails() {
    let { data } = await getAllCatagories()
    setAllCatagories(data)
  }



  async function getSubCatagoriesDetails(id) {
    let { data } = await getSubCatagories(id)
    setSubCatagories(data)
  }

  

  useEffect(() => {
    getAllCartDetails()
  }, [])

  return (
    <>
      <div className=' container'>
        {allCatagories?.data ? <div className="row g-4 py-5">
          {allCatagories?.data?.map((ele) => <div key={ele._id} className="col-md-4  text-center">
            <div className='cursor-pointer' onClick={()=>getSubCatagoriesDetails(ele._id)}>
              <div className="card product">
                <img src={ele.image} height={300} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text text-success fw-bold py-1 h3">{ele.name}</p>
                </div>
              </div>
              </div>
          </div>)}
        </div>

      : <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={'justify-content-center'}
        wrapperStyle=""
        visible={true}
      />}






      <SubCatagories>

      </SubCatagories>
    </div >

    </>
  )
}
