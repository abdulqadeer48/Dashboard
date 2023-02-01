import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <nav className="navbar fixed-top navbar-expand-md bg-warning mb-3">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link active text-dark text-center ms-5"
            to="/signup"
        
          >
            SignUp
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link active  text-dark  "
            to="/login"
           
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HomePage;
