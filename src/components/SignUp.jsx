import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Images from "../Images/img.jpg"
function SignUp(e) {

  // USE OF HOOKS

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //    LOCAL FUCTIONS

  function LoginFunc(e) {
    e.preventDefault();
    setEmail("");
    setPassword("");

    const url = "http://localhost:1000/Signup";

    const headers = {
      "Content-Type": "application/json",
    };

    let data = {
      email: email,
      password: password,
    };

    axios
      .post(url, data, { headers })
      .then((res) => {
        alert("submitted successfully")
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
 

  return (
    <div className='container'>

      <div style={{backroundImage:`url(${Images})`,height:"100%",width:"100%"}}>
      <div className='text-center my-5'>
       <p className='fs-1 fw-bolder'>SignUp</p>
      </div>
      </div>
      

      <div className="col-sm-6 offset-3" >
        <form className="bg-transparent m-5 ">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <Link to="/login" className="form-item">
            Already have an account Signin?
          </Link>
          <br />
          <button
            onClick={(e) => {
              LoginFunc(e);
            }}
            type="submit"
            className="btn btn-primary mt-3 "
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;


