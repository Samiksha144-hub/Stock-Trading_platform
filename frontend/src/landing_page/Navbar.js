import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const handleLogout = async () => {
    try {
      await axios.get(
        "http://localhost:3002/logout",
        {
          withCredentials: true,
        }
      );
  
      window.location.href = "http://localhost:3000/";
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="/assets/logo.png"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
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
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
  <button
    type="button"
    className="nav-link active border-0 bg-transparent"
    onClick={handleLogout}
  >
    Logout
  </button>
</li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;