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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/product/mobiles">
                Mobiles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product/watches">
                Watches
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product/laptops">
                Laptops
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/user/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/signup">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/profile">
                <i className="fas fa-shopping-cart">
                  <span className="badge badge-success">2</span>
                </i>
              </Link>
            </li>
            <li className="nav-item">
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
