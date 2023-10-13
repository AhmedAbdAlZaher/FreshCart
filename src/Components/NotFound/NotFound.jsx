import React from 'react'
import styles from "./NotFound.module.css"
import errorImage from "../../Assets/images/error.svg"
export default function NotFound() {
  return (
    <>
    <div className='container text-center  pt-5 mt-5'>

    
    <img src={errorImage} alt="" />
    <h2 className=' pt-5 mt-5'> Error 404 not Found</h2>
    </div>
    </>
  )
}
