import React, { useContext, useState } from 'react'
import styles from "./AllOrders.module.css"
import { CartContext } from '../../context/cartContext'

export default function AllOrders() {

  let {getuserorders} = useContext(CartContext)

  const [userorders , setUserOrders] = useState(null)

  async function getuserorder() {
    let { data } = await getuserorders()
    setUserOrders(data)
  }
  console.log(userorders);

  return (
    <div className=' container'>
      <div className='bg-success p-5 my-5 text-center text-white'>
        <h2>Congrats</h2>
      </div>
    </div>
  )
}
