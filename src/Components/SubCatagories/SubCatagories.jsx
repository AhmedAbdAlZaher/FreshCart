import React, { useContext, useEffect, useState } from 'react'
import styles from "./SubCatagories.module.css"
import axios from 'axios'
import { useQuery } from 'react-query'
import { CataContext } from '../../context/CataContext'


export default function SubCatagories() {


  let { getSubCatagories, cataID , setcataID } = useContext(CataContext)

  const [subCatagories, setSubCatagories] = useState(null)


  async function getSubCatagoriesDetails(id) {
    let { data } = await getSubCatagories(id)
    setSubCatagories(data)   
  }



useEffect(()   => {
  getSubCatagoriesDetails(cataID);
}, [cataID]);


 


  return (
 <>
     {subCatagories?.data ? 
            <div className='contianer  mb-5'>
              {/* <p className='h2 text-center py-3 text-main'>{name} subcategories</p> */}
              <div className="row g-3 gy-3 justify-content-center">
                {subCatagories.data.map((ele) => 
                  <div key={ele._id} className="card col-md-3 mx-3 product text-center">
                    <ul className="list-group  p-2  list-group-flush">
                      <li className="list-group-item fw-bold">{ele.name}</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            : null}
 
 </>
  )
}
