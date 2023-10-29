import React, { useContext, useEffect, useState } from 'react'
import styles from "./AllOrders.module.css"
import { AllordersContext } from '../../context/allorderContext'


export default function AllOrders() {

  let { getuserorders } = useContext(AllordersContext)

  const [userorders, setUserOrders] = useState(null)

  async function getalluserorder() {
    let { data } = await getuserorders()
    setUserOrders(data)

  }
  useEffect(() => {
    getalluserorder(); // Call the function when the component mounts
  }, []);

  console.log(userorders);

  return (
    <>
      {userorders ? <div className=' container'>
        <div className='bg-success p-5 my-5 text-center text-white'>
          <h2>Congrats</h2>
        </div>
        {userorders.map((ele)=>
        <div>
          <h3>shipping Address :{ele.shippingAddress.details}</h3>
          <h4>phone: {ele.shippingAddress.phone}</h4>
          <h4>city: {ele.shippingAddress.city}</h4>
          <div>
            <h2>total order Price{ele.totalOrderPrice} EGP</h2>
            <h3>title{ele.cartItems[0].product.title}</h3>
            <img src={ele.cartItems[0].product.imageCover} alt="" />
          </div>
        </div>)}
      </div>


        : ""}

    </>
  )
}
