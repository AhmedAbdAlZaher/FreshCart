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
      {userorders ? <div className=' container my-5'>
        <div className='bg-success p-5 my-5 text-center text-white'>
          <h2>Orders History</h2>
        </div>
        {userorders.map((ele) =>
          <div className='row py-2 border-bottom bg-main-light'>
            <div className='col-md-11'>
              <div className='d-flex justify-content-between'>
                <div className="left-side">
                  <h4>Shipping Address :{ele.shippingAddress.details}</h4>
                  <h4>Phone : {ele.shippingAddress.phone}</h4>
                  <h4>City : {ele.shippingAddress.city}</h4>
                  <h4>Total Order Price : <span className=' text-main'>{ele.totalOrderPrice}</span> EGP</h4>
                  <h4 className='text-main'>Product : {ele.cartItems[0].product.title.split(" ").slice(0, 3).join(" ")}</h4>
                </div>
                <div className='col-md-1 mt-4'>
                <div className='right-side'>
                <img className='w-100' src={ele.cartItems[0].product.imageCover} alt="" />
                </div>
              </div>
             
              </div>
            </div>

            <div className=''>
          
            

            </div>
          </div>)}
      </div>


        : ""}

    </>
  )
}
