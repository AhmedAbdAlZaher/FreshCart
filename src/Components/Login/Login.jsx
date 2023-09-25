import React, { useContext, useState } from 'react'
import styles from "./Login.module.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { tokenContext } from '../../context/tokenContext'





 
export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setapiError] = useState("")
  let {setToken}=useContext(tokenContext)

  let navigaite = useNavigate()

  async function login(values) {
    setapiError('')
    setIsLoading(true)
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values).catch((err)=>{          //values ely 
      setapiError(err.response.data.message)
      setIsLoading(false)
    });
    if (data.message == "success") {
      setIsLoading(false)
      localStorage.setItem("userToken" , data.token)
      setToken(data.token)
      navigaite("/")
    }
  }

  let validationSchema = Yup.object({
    email: Yup.string().email("Email is Not valid").required("Email is required"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,8}$/, "password should start with Capital").required("Password is required"),
  })


  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      
    },
    validationSchema: validationSchema,
    onSubmit: (values) => login(values)

  })


  return (
    <>
      <div className="container my-5">
        <h2 className='mb-3'>Login Now</h2>
        {apiError ? <div className='alert alert-danger'>{apiError}</div> : ""}
        <form className='w-75 mx-auto' onSubmit={formik.handleSubmit}>
        
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
          
        
          {isLoading ? <button type='submit' className="btn bg-main d-block text-white ms-auto"><i className='fa fa-spin fa-spinner'></i></button> 
          : <button disabled={!(formik.isValid && formik.dirty )} type='submit' className="btn bg-main d-block text-white ms-auto">Login</button>}


        </form>
      </div>
    </>
  )
}
