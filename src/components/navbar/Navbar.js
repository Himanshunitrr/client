import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import BrandLogo from "./BrandLogo.jpg";

export default class Navbar extends Component {
  handleClick = (event) => {
    document.body.classList.toggle("nav-toggle-links");
  };
  render() {
    return (
      <div>
        <div className="nav-addon">
          <img src={BrandLogo} alt="Brand logo" />
          <h1>Bakar</h1>
        </div>
        <div className="navbar-container">
          <div className="brand-name">
            <img src="" alt="" />
            <div className="name">Bakar</div>
          </div>
          <FaBars className="fabars" onClick={this.handleClick} size={"30px"} />
        </div>
        <div className="nav-links" id="nav-links-id">
          <div className="links">
            <div>
              <Link
                className="nav-link"
                to="/signin"
                onClick={this.handleClick}
              >
                Signin
              </Link>
            </div>
            <div>
              <Link
                className="nav-link"
                to="/signup"
                onClick={this.handleClick}
              >
                Signup
              </Link>
            </div>
            <div>
              <Link
                className="nav-link"
                to="/home"
                onClick={this.handleClick}
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                className="nav-link"
                to="/profile"
                onClick={this.handleClick}
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
