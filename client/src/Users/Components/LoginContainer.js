import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';


import "./LoginContainer.css";

export const LoginContainer = (props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  
  const [LoginStatus, setLoginStatus] = useState("")

  const login = ()=>
  {
    Axios.post(`http://localhost:3001/login/${props.login}`, {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message)
      {
        setLoginStatus(response.data.message)
      }
      else{
        <Link to="/" exact />
      }
      
    });
  }

  return (
    <div className="loginContainer">
      <center>
        <h4 className="mssg">{LoginStatus}</h4>
        <img src={props.image} className="container-image" alt="" />
        <h3 className="rainbow">{props.loginType} Login</h3>
        <form>
          <label>
            <h4>{props.username}</h4>
          </label>
          <input
            type="text"
            className="input"
            required
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <label>
            <h4>Password</h4>
          </label>
          <input
            type="password"
            className="input"
            required
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <input type="submit" name="submit" value="Login" className="fade" onClick={login}/>
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
