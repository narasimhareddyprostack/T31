import React from "react";
import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="nav-link" to="/">
          Logo
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link className="nav-link" to="/product/laptops">
                Mobiles
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/product/laptops">
                Watches
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link" to="/product/laptops">
                Laptops
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/user/login">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/user/signup">
                SignUp
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/user/profile">
                Profile
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/user/profile">
                Cart
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/product/upload">
                Upload
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
