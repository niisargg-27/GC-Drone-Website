import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" id="navbar-logo-text" style={{fontSize: "30px"}}>
        DRONIFY</a
      >
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Link to={"user-order"}  style={{textDecoration: "none"}}>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Place Order</a>
          </li>
          </Link>
          <li className="nav-item">
            <a className="nav-link" href="#">Track Drone</a>
          </li>
          <Link to={"/"}  style={{textDecoration: "none"}}>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          </Link>
          <Link to={"past-orders"}  style={{textDecoration: "none"}}>
          <li className="nav-item">
            <a className="nav-link" href="#">Past Orders</a>
          </li>
          </Link>

           <Link to="login" style={{textDecoration: "none", position: "absolute", right:"100px"}}>
          <li className="nav-item">
            <a className="nav-link" href=''>Log in</a>
          </li>
           </Link>
           <Link to="signup" style={{textDecoration: "none", position: "absolute", right:"20px"}}>
          <li className="nav-item">
            <a className="nav-link" href=''>Sign Up</a>
          </li>
           </Link>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}
