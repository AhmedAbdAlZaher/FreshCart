import React, { useContext, useState } from 'react'
import styles from "./Products.module.css"
import { CartContext } from '../../context/cartContext'
import axios from 'axios'
import { useQuery } from 'react-query'
import { wishListContext } from '../../context/wishListContext'
import { BallTriangle } from 'react-loader-spinner'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
export default function Products() {



  let { addToCart, setnumOfCartItems } = useContext(CartContext)

  function getProduct() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products")
  }

  let { isLoading, data } = useQuery(["FeaturedProducts", getProduct] )




  async function addCart(id) {
    let res = await addToCart(id)
    if (res.data.status == "success") {
      toast.success('product added successfullly');
      setnumOfCartItems(res.data?.numOfCartItems);

    } else {
      toast.error('something went wrong')
    }
  }

  // wishlist part

  let { addToWishList, getWishList, deleteFromWishList } = useContext(wishListContext)
  const [allWishList, setAllWishList] = useState(null)

  async function addWishList(id) {
    let res = await addToWishList(id)
    if (res.data.status == "success") {
      toast.success('product added To WishList');
    } else {
      toast.error('something went wrong')
    }

  }

  async function getWishListDetails() {
    let { data } = await getWishList()
    setAllWishList(data)
  }

  async function removeItemfromWishList(id) {
    let { data } = await deleteFromWishList(id)
    getWishListDetails()
  }

  const isItemInWishlist = (itemId) => {
    return allWishList?.data?.some((wish) => wish._id === itemId);
  };

  const toggleWishlistItem = (itemId) => {
    if (isItemInWishlist(itemId)) {
      removeItemfromWishList(itemId); // Assuming this removes the item from the wishlist
    } else {
      addWishList(itemId); // Assuming this adds the item to the wishlist
    }
  };








    return (
      <>
        <div className="container py-5">
          {isLoading ?


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

            :



            <div className="row">

              <input type="text" className='form-control ' placeholder='Search' ></input>

              {data?.data?.data?.map((ele) => <div key={ele.id} className="col-md-2">
                <div className="product px-2 py-3">
                  <Link to={`Details/${ele.id}`} >
                    <img className='w-100' src={ele.imageCover} alt={ele.title} />
                    <p className='text-main'>{ele.category.name}</p>
                    <h3 className='h6'>{ele.title.split(" ").slice(0, 3).join(" ")}</h3>
                    <div className="d-flex justify-content-between">
                      <p>{ele.price} EGP</p>
                      <p>
                        <i className='fa fa-star rating-color'></i>
                        {ele.ratingsAverage}
                      </p>
                    </div>
                  </Link>

                  <p className='text-end' onClick={() => toggleWishlistItem(ele.id)}>
                    {isItemInWishlist(ele.id) ? (
                      <i className='fa fa-xl text-danger fa-heart'></i>
                    ) :
                      (<i className='fa fa-xl text-black fa-heart'></i>)
                    }


                  </p>


                  <button onClick={() => addCart(ele.id)} className='btn bg-main text-white w-100'>Add to Cart</button>

                </div>
              </div>)}

            </div>}

        </div >

      </>

)}
