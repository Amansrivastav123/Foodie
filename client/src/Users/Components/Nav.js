import React from "react";
import './Nav.css';
import image from './foodie_logo.jpg'
import { Link } from "react-router-dom";
export const Nav = (props) => {
  return (
    <nav>
      <img src={image} alt="" className="inline" id="logo" />
      <h1  className="inline">
        FOODIE
      </h1>

     {props.home? <div className="topnav-right">
       <Link to="/">
        <input type="submit" name="submit" value="Home" className="fade" />
        </Link>
      </div>:""}
    </nav>
  );
};
