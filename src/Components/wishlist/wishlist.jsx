import React, { useContext, useEffect, useState } from 'react'
import styles from "./wishlist.module.css"
import { BallTriangle } from 'react-loader-spinner'
import { wishListContext } from '../../context/wishListContext'
import { CartContext } from '../../context/cartContext'
import toast from 'react-hot-toast'
export default function Wishlist() {

  let { addToCart , setnumOfCartItems ,  } = useContext(CartContext)
    async function addCart(id) {
      let res = await addToCart(id)
      if (res.data.status == "success") {
        toast.success('product added successfullly')
        setnumOfCartItems(res.data.numOfCartItems);
      } else {
        toast.error('something went wrong')
  
  
      }
    }
    async function removeItemfromWishList(id) {
      let { data } = await deleteFromWishList(id)
      getWishListDetails()
    }
  


  let { getWishList , deleteFromWishList } = useContext(wishListContext)
  const [allWishList, setAllWishList] = useState(null)
  
  async function getWishListDetails() {
    let { data } = await getWishList()
    setAllWishList(data)
  }


  useEffect(() => {
    getWishListDetails()
  }, [])

  return (
    <>
      {allWishList?.data ? 
        <div className="container fw-bold bg-main-light my-5">
          <div className="w-100 mx-auto bg-main-light p-5">
            <h1>My WishList</h1>
          </div>
          {allWishList.data.map((ele)=>
          <div key={ele._id} className="row py-2 align-items-center border-bottom">
          <div className="col-md-1">
            <img src={ele.imageCover} className='w-100' alt="" />
          </div>
          <div className="col-md-11">
            <div className="d-flex justify-content-between">
              <div className="left-side">
                <h4>{ele.title}</h4>
                <p>{ele.price}</p>

              </div>
              <div className="right-side mt-auto">
                <button onClick={() => addCart(ele.id)} className='btn btn-success text-white'>add to cart</button>
              </div>
            </div>
            <button  onClick={() => removeItemfromWishList(ele.id)} className='btn text-danger p-0'><i className='fa fa-trash-can'></i> Remove</button>
          </div>
        </div>
          
          )}
          
        </div>
       : null}

    </>
  )
}
