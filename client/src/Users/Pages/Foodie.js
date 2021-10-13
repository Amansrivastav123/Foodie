import React from "react";
import { Nav } from "../Components/Nav";
import { LoginContainer } from "../Components/LoginContainer";
import image from "../../Image/customer.jpg";
import { Link } from "react-router-dom";
import "./Foodie.css";
export const Foodie = () => {
  return (
    <div className="bg">
      <Nav home={false} />
      <div style={{ marginLeft: "1000px", marginTop: "20px" }}>
        <LoginContainer
          loginType="Foodie"
          username="Mobile"
          signup="Signup"
          image={image}
          link="foodieRegistration"
        />
      </div>
      <div class="footer">
        <div class="innerfooter">
          <div class="logo_container">
            <img src="../foodie_logo.jpg" alt="" />
          </div>
          <div class="footer_third">
            <center>
              <h2>RESTAURANT</h2>
              <Link to="/restaurant">
                Login /Add Restaurant
              </Link>
            </center>
          </div>
          <div class="footer_third">
            <center>
              <h2>DELIVERY</h2>
                <Link to="/driver">
                Work As Delivery Agent
              </Link>
            </center>
          </div>
          <div class="footer_third">
            <center>
              <h2>ADMIN</h2>
              <Link to="/admin">Admin Login</Link>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};
