import React from 'react'
import styles from "./NavBar.module.css"
import { Link } from 'react-router-dom'
import logo from "../../Assets/images/freshcart-logo.svg"
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/products"}>Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/cart"}>Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/catagories"}>Catagories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/brands"}>Brands</Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
<li className="nav-item">
  <i className='fab fa-facebook-f mx-1'></i>
  <i className='fab fa-twitter mx-1'></i>
  <i className='fab fa-instagram-f mx-1'></i>
  <i className='fab fa-tiktok mx-1'></i>
  <i className='fab fa-youtube mx-1'></i>
  <i className='fab fa-linkedin mx-1'></i>

</li>




              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/register"}>Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/login"}>Logout</Link>
              </li>
            </ul>


          </div>
        </div>
      </nav>


    </>
  )
}
