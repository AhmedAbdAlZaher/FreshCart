import React, { useContext } from 'react'
import styles from "./Cheakout.module.css"
import { useFormik } from 'formik'
import { CartContext } from '../../context/cartContext'
export default function Cheakout() {

  let {onlinePayment} = useContext(CartContext)

  let formik = useFormik({
    initialValues: {
      "details": "",
      "phone": "",
      "city": ""
    },
    onSubmit: payment
  })


  async function payment(values) {
    console.log("hello")
   let {data} = await onlinePayment(values)
   console.log(data)
   window.location.href = data.session.url
  }

  return (


    <>
      <div className="container">
        <div className='mx-auto bg-main-light p-5'>
          <h2>Shipping Addres</h2>
<form onSubmit={formik.handleSubmit}>
  <div className="form-group mb-3">
    <label htmlFor="Details">Details</label>
    <input type="text" className='form-control' id='details' name='details' value={formik.values.details} onChange={formik.handleChange} />
  </div>
  <div className="form-group mb-3">
    <label htmlFor="phone">Phone</label>
    <input type="tel" className='form-control' id='phone' name='phone' value={formik.values.phone} onChange={formik.handleChange} />
  </div>
  <div className="form-group mb-3">
    <label htmlFor="city">City</label>
    <input type="text" className='form-control' id='city' name='city' value={formik.values.city} onChange={formik.handleChange} />
  </div>
  <button type='submit' className='btn bg-main w-100 text-white'>Pay Now</button>
</form>


        </div>
      </div>
    </>
  )
}
