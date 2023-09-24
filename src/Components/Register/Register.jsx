import React, { useState } from 'react'
import styles from "./Register.module.css"

import * as Yup from 'yup'
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'





export default function Register() {

  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setapiError] = useState("")

  let navigaite = useNavigate()

  async function register(values) {
    setapiError('')
    setIsLoading(true)
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values).catch((err)=>{          //values ely 
      setapiError(err.response.data.message)
      setIsLoading(false)
    });
    if (data.message == "success") {
      setIsLoading(false)
      navigaite("/login")
    }
  }

  let validationSchema = Yup.object({
    name: Yup.string().max(15, "name should not be less than 15").required("Name is Required"),
    email: Yup.string().email("Email is Not valid").required("Email is required"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,8}$/, "password should start with Capital").required("Password is required"),
    rePassword: Yup.string().oneOf([Yup.ref('password')], "repassword should match password").required("Repassword is required"),
    phone: Yup.string().matches(/^01[0125][0-9]{8}$/, "Phone is Invalid").required("Phone is required"),
  })


  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => register(values)

  })


  return (
    <>
      <div className="container my-5">
        <h2 className='mb-3'>Register Now</h2>
        {apiError ? <div className='alert alert-danger'>{apiError}</div> : ""}
        <form className='w-75 mx-auto' onSubmit={formik.handleSubmit}>
          <div className='form-group mb-2'>
            <label htmlFor=""> Name</label>
            <input type="text" className='form-control' id='name' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.name && formik.touched.name ? <div className='alert alert-danger'>{formik.errors.name}</div> : null}
          </div>
          <div className='form-group mb-2'>
            <label htmlFor="Email"> Email</label>
            <input type="e0mail" className='form-control' id='Email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div> : null}
          </div>
          <div className='form-group mb-2'>
            <label htmlFor="password"> Password</label>
            <input type="password" className='form-control' id='password' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>{formik.errors.password}</div> : null}
          </div>
          <div className='form-group mb-2'>
            <label htmlFor="rePassword"> RePassword</label>
            <input type="password" className='form-control' id='rePassword' name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger'>{formik.errors.rePassword}</div> : null}
          </div>
          <div className='form-group mb-2'>
            <label htmlFor="phone"> Phone</label>
            <input type="tel" className='form-control' id='phone' name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger'>{formik.errors.phone}</div> : null}
          </div>
          {isLoading ? <button type='submit' className="btn bg-main d-block text-white ms-auto"><i className='fa fa-spin fa-spinner'></i></button> 
          : <button type='submit' className="btn bg-main d-block text-white ms-auto">Register</button>}


        </form>
      </div>
    </>
  )
}
