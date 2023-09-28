import React, { useContext } from 'react'
import styles from "./Home.module.css"
import { tokenContext } from '../../context/tokenContext'
import FeatureProducts from '../FeatureProducts/FeatureProducts'
export default function Home() {

  let {token} =useContext(tokenContext)
  

  return (
    <>
   <FeatureProducts></FeatureProducts>
   </>
  )
}
