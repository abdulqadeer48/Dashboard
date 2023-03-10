import React from "react";
import { Link } from "react-router-dom";
import Images from "../Images/img2.jpg"
// import Carousel from "./Carousel";
// import Footer from "./Footer";

export const HomeNavbar = () => {
  return (
    <div>
      <img src={Images} style={{height:'100%',width:"100%"}}></img>
      {/* <div className="img" style={{backgroundImage:`url(${Images})` }}></div> */}
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/services" tabindex="-1" aria-disabled="true">Services</Link>
              </li>
            </ul>
            <div className="d-flex justify-content-lg-end justify-content-md-start">
              U
              <Link to="/login">
              <button className="btn btn-outline-success me-2" type="btn" placeholder="Search" aria-label="Search">Login
              </button> </Link>
              <Link to="/signup">
              <button className="btn btn-outline-success" type="submit">SignUp</button></Link>
             
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};
export default HomeNavbar;