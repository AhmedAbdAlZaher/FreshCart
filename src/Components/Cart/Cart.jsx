import React, { useContext, useEffect, useState } from 'react'
import styles from "./Cart.module.css"
import { CartContext } from '../../context/cartContext'
import { BallTriangle } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
export default function Cart() {


  const [cartdetails, setcartdetatils] = useState({})


  let { getCart, deleteProductFromCart, updateProductQuantity , setnumOfCartItems } = useContext(CartContext)



  async function removeitem(id) {
    let { data } = await deleteProductFromCart(id)
    setcartdetatils(data)
    setnumOfCartItems(data.numOfCartItems)
  }







  async function updateCount(id, count) {
    let { data } = await updateProductQuantity(id, count)
    setcartdetatils(data)
    if (count == 0) {
      removeitem(id)
    }
  }


  async function getCartDetails() {
    let { data } = await getCart()
    setcartdetatils(data)
    setnumOfCartItems(data?.numOfCartItems)

  }



  useEffect(() => {
    getCartDetails()
  }, [])

  return (
    <>

      {cartdetails?.data ? <div className="container my-5">
        <div className="w-100 mx-auto bg-main-light p-5">
          <h1> cart shop</h1>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className='h5'>total price : <span className='text-main'> {cartdetails.data.totalCartPrice}</span></h3>
            <h3 className='h5'>total Cart items : <span className='text-main'> {cartdetails.numOfCartItems}</span></h3>

          </div>



          {cartdetails.data.products.map((ele) =>
            <div key={ele.product._id} className="row py-2 border-bottom">
              <div className="col-md-1">
                <img src={ele.product.imageCover} className='w-100' alt="" />
              </div>
              <div className="col-md-11">
                <div className="d-flex justify-content-between">
                  <div className="left-side">
                    <h4>{ele.product.title}</h4>
                    <p>{ele.price}EGP</p>

                  </div>
                  <div className="right-side">
                    <button className='btn btn-danger text-white' onClick={() => updateCount(ele.product._id, ele.count - 1)}>-</button>
                    <span className='mx-2'>{ele.count}</span>
                    <button className='btn main-btn text-white' onClick={() => updateCount(ele.product._id, ele.count + 1)}>+</button>
                  </div>
                </div>
                <button onClick={() => removeitem(ele.product._id)} className='btn text-danger p-0'><i className='fa fa-trash-can'></i> Remove</button>
              </div>
            </div>)}
{cartdetails.numOfCartItems == 0 ? " " :  <Link  className="btn bg-main w-100 text-white mt-5" to={'/Cheakout'}> checkout</Link> }
         
        </div>



      </div> : 
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={'justify-content-center'}
        wrapperStyle=""
        visible={true}
      />
      
      }

    </>
  )
}
