import React from 'react'
import styles from "./SubCatagories.module.css"
import axios from 'axios'
import { useQuery } from 'react-query'


export default function SubCatagories() {


  // function getSubCatagories(id) {
  //   return axios.get(`https://ecommerce.routemisr.com/api/v1/subcategories/${id}`)
  // }

  // let { isLoading, data } = useQuery("FeaturedProducts", getSubCatagories)


  return (
    <div className="card" >
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
    </div>
  )
}
