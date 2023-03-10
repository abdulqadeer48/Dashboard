import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Images from "./Images/img2"

function LoginPage(e) {
  // USE OF HOOKS

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //    LOCAL FUCTIONS

  function LoginFunc(e) {
    e.preventDefault();
    setEmail("");
    setPassword("");
    
    useEffect(()=>{
      axios
      .post(url, data, { headers })
      .then((res) => {
        alert("login successfully")

        console.log(res.data);
      })
      .catch((err) => {
           
        console.log(err);
      })
    },[])
  }
    const url = "localhost:1000/Signin";

    const headers = {
      "Content-Type": "application/json",
    };

    let data = {
      email: email,
      password: password,
    };
  

  return (
    <div className="container">
       <div className='text-center my-5'>
        <p className='fs-1 fw-bolder'>Login</p>

      </div>
      <div className="col-sm-6 offset-3">
        <form className="m-5">
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


          <Link to="/signup" className="form-item">
            don't have an account create?
          </Link>
          <br />
          <button
            onClick={(e) => {
              LoginFunc(e);
            }}
            type="submit"
            className="btn btn-primary mt-3"
          >
            LogIn
          </button>
        </form>
      </div>

      {/* <div>
        <ol>
          {allUsers.map((item) => {
            return (
              <li>
                email: <p>{item.email}</p>
                password: <p>{item.password}</p>
              </li>
            )
          })}
        </ol>
      </div> */}
    
    </div>
  );
}

export default LoginPage;
