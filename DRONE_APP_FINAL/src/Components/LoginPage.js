import React , { useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function LoginPage() {
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
  if(email && password){
    
      axios.post("http://localhost:9002/login", user)
      .then(res => {})
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
          <div className="col-md-12">
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

          <div
            className="col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
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
            <Link to={"../signup"}>

            <button
              className="btn btn-primary"
              style={{ width: "300px" , fontSize: "20px"}}
              >
              Sign Up
            </button>
                </Link>
          </div>
      </div>
    </>
  );
}
