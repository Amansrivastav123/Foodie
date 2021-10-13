import React from "react";
import { Link } from "react-router-dom";

import "./LoginContainer.css";


export const LoginContainer = (props) => {
  return (
    <div className ="loginContainer">
      <center>
        <img src={props.image} className="container-image" alt="" />
        <h3 className="rainbow">{props.loginType} Login</h3>
        <form>
          <label>
            <h4>{props.username}</h4>
          </label>
          <input type="text" className="input" required />
          <label>
            <h4>Password</h4>
          </label>
          <input type="password" className="input" required />
          <input type="submit" name="submit" value="Login" className="fade" />
        </form>

        {props.account ? (
          <>
            <div className="strike">
              <span>OR</span>
            </div>
            <h5>
              <u>Don't have an Account!! Create One</u>
            </h5>
            <Link to={`/${props.link}`}>
            <input
              type="submit"
              name="submit"
              value={props.signup}
              className="fade"
            />
            </Link>
          </>
        ) : (
          ""
        )}
      </center>
     
    </div>
  );
};

LoginContainer.defaultProps = {
  account: "true",
};
