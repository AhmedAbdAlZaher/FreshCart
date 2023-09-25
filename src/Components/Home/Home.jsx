import React, { useContext } from 'react'
import styles from "./Home.module.css"
import { tokenContext } from '../../context/tokenContext'
export default function Home() {

  let {token} =useContext(tokenContext)
  console.log(token)
  
  return (
    <div>Home</div>
  )
}
