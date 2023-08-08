import React, { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FaceIcon from "@mui/icons-material/Face";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top5Percent = window.innerHeight * 0.038;
      setIsFixed(window.scrollY >= top5Percent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const check = () => {
    localStorage.removeItem("isLoggedIn");
    navigate(`/login`);
  };
  function isLoggedInComponent() {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (isLoggedIn) {
      return (
        <>
          <a>
            <span className="sign_in" onClick={check}>
              Log Out
            </span>
            <FaceIcon />
          </a>
        </>
      );
    } else {
      return (
        <>
          <a>
            <span className="sign_in" onClick={check}>Log In</span> <FaceIcon />
          </a>
        </>
      );
    }
  }
  return (
    <>
      <div className="subNavbar">
        <div className="subnavbar_headingLeft">
          <p>Brand Waali Quality, Bazaar Waali Deal!</p>
        </div>
        <div className="subnavbar_headingRight">
          <ul>
            <li>
              <Link to="/impact">Impact@Snapdeal</Link>
            </li>
            <li>
              <Link to="/gift-cards">Gift Cards</Link>
            </li>
            <li>
              <Link to="/help-center">Help Center</Link>
            </li>
            <li>
              <Link to="#">Sell On Snapdeal</Link>
            </li>
            <li>
              <Link to="#">Download App</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`mainNavbar ${isFixed ? "fixed" : ""}`}>
        <div className="logo">
          <Link to="/">
            <img src={require("../img/logo.img")} alt="logo" />
          </Link>
        </div>
        <div className="serachBar">
          <input type="text" placeholder="Search Product & Brands" />

          <Link className="search">Search</Link>
        </div>
        <div className="login">
          <Link to="/cart">
            <sub className="cart_text">Cart</sub> <ShoppingCartOutlinedIcon />
          </Link>
          <div>{isLoggedInComponent()}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
