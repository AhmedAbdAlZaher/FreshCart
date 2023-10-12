import React from 'react'
import styles from "./Brands.module.css"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Brands() {

  const [brands, setbrands] = useState(null)
  const [oneBrand, setOneBrands] = useState(null)

  const [brandId, setBrandId] = useState(null)


  async function getBrands() {
    let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/brands') 
    .then((res) => res)
    .catch((err) => err)
    setbrands(data)
  }

  async function getspecificbrand(brandId){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`)
    .then((res) => res)
    .catch((err) => err)
    setOneBrands(data)
  }

console.log(oneBrand)

  useEffect(() => {
    getBrands()
    getspecificbrand(brandId)
  }, [brandId])


function getBrandID (ele){
  setBrandId(ele._id)

}


  return (
    <>
      <div className=" container">
        <h2 className=' text-success fw-bolder text-center pt-3'>All Brands</h2>

        <div className="row g-3">
          {brands ?.data.map((ele)=> <div key={ele._id} className="col-md-3 text-center">
            <div className="card" onClick={()=>getBrandID(ele)}  data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ width: "18rem" }}>
              <img src={ele.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className=" fw-bold card-title">{ele.name}</h5>
              </div>
            </div>
          </div>
          
          
          
          ) }
         

          <div>
          </div>


          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex justify-content-between align-items-center">
                  <div className="col-md-2 ps-4">
                  <h2 className='text-main fw-bold'>{oneBrand?.data.name}</h2>
                  <p className='fw-bold'> {oneBrand?.data.name}</p>
                  </div>
                  <div className="col-md-7">
                  <img className=' img-fluid' src={oneBrand?.data.image} alt="" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}
