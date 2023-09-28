import React, { useContext } from 'react'
import styles from "./Home.module.css"
import { tokenContext } from '../../context/tokenContext'
import FeatureProducts from '../FeatureProducts/FeatureProducts'
import CatagoriesSlider from '../CatagoriesSlider/CatagoriesSlider'
import MainSlider from '../MainSlider/MainSlider'
export default function Home() {

  let {token} =useContext(tokenContext)
  

  return (
    <>
    <MainSlider></MainSlider>
   <CatagoriesSlider></CatagoriesSlider>
   <FeatureProducts></FeatureProducts>
   </>
  )
}
