import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminLogin() {

    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setUser({
          ...user,
          [name]: value,
        });
      };
      const login = ()=>{
        const { email, password} = user;
        const admin = {
            email: "admin123@gmail.com",
            password: "admin"
        }
        if(user.email === admin.email){
            if(user.password === admin.password){
                
            }
            else{

                alert("Password dont match");
            }
        
      }};

  return (
    <>
      <div
        className="container"
        style={{
          border: "2px solid black",
          width: "600px",
          marginTop: "200px",
        }}
      >
        
          <div className="col-md-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              name="email"
              placeholder="abcd@example.com "
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="inputPassword4"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <div
            className="col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              marginTop: "20px"
            }}
          >
            
            <button
              className="btn btn-primary"
              style={{ width: "300px" , fontSize: "20px"}}
              onClick={login}
            >
              Log In
            </button>
          </div>
      </div>
    </>
  )
}
