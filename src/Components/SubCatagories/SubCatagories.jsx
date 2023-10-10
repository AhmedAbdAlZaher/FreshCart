import React, { useContext, useEffect, useState } from 'react'
import styles from "./SubCatagories.module.css"
import axios from 'axios'
import { useQuery } from 'react-query'
import { CataContext } from '../../context/CataContext'


export default function SubCatagories() {


  let {getSubCatagories } = useContext(CataContext)

  const [subCatagories, setSubCatagories] = useState(null)

  async function getSubCatagoriesDetails(id) {
    let { data } = await getSubCatagories(id)
    setSubCatagories(data)
    
  }




  useEffect(() => {
    getSubCatagoriesDetails()
  }, [])


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
