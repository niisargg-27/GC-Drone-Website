import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"


export default function SignupPage() {
 const [user, setUser ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password:"",
    reEnterPassword: "",
    phoneNumber: ""

})

const handleChange = e =>{
 const {name, value} = e.target
 console.log(name,value);
 setUser({
    ...user,
    [name] : value 
 })
}
const register = ()=>{
  const {firstName, lastName, email, password, reEnterPassword, phoneNumber} = user; 
  if(firstName && lastName && email && password && phoneNumber){
    if(password == reEnterPassword){
      axios.post("http://localhost:9002/signup", user)
      .then(res => {console.log(res)})
    }
    else{
      alert("PASSWORD DOESNT MATCH")
    }
  }
  else{
    alert("PLEASE FILL ENTIRE FORM")
  }

}

  return (
    <>
      <div
        className="container"
        style={{
          border: "2px solid black",
          width: "600px",
          marginTop: "100px",
        }}
      >
          <div className="col-md-6">
            <label for="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="firstName"
              value={user.firstName}
              placeholder="Mark"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label for="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastName"
              value={user.lastName}
              placeholder="Hamill"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              name="email"
              value={user.email}
              placeholder="abcd@example.com "
              onChange={handleChange}
            />
          </div>
          <div className="col-8">
            <label for="inputnumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="inputnumber"
              name="phoneNumber"
              value={user.phoneNumber}
              placeholder="1234567890"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              id="inputPassword4"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label for="inputconfirmPassword4" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              name="reEnterPassword"
              value={user.reEnterPassword}
              id="inputrePassword4"
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div
            className="col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <Link to={"/user-order"}>
            <button
              className="btn btn-success"
              style={{ width: "300px" , fontSize: "20px"}}
              onClick={register}
              >
              Sign Up
            </button>
              </Link>
          </div>
          <div
            className="col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <b style={{fontSize: "25px"}}>OR</b>
          </div>
          
          <div
            className="col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <Link to="../login">
            <button
              className="btn btn-primary"
              style={{ width: "300px" , fontSize: "20px"}}
              >
              Login
            </button>
              </Link>
          </div>
      </div>
    </>
  );
}
