import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useHistory } from "react-router";


import "./LoginContainer.css";

export const LoginContainer = (props) => {
  const history = useHistory();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const [LoginStatus, setLoginStatus] = useState("");

  const loginFoodie = () => {
    Axios.post(`http://localhost:3001/login/foodie`, {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        <Link to={`/restaurant`} exact />;
      }
    });
  };

  const loginRestaurant = () => {
    Axios.post(`http://localhost:3001/login/restaurant`, {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        history.push("/")
        console.log(response);
      }
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = [
      {
        email: "aman123@gmail.com",
        password: "aman123",
      },
      {
        email: "jayant123@gmail.com",
        password: "jayant123",
      },
      {
        email: "akshay123@gmail.com",
        password: "akshay123",
      },
    ];

    if (
      (username === hardcodedCred[0].email &&
        password === hardcodedCred[0].password) ||
      (username === hardcodedCred[1].email &&
        password === hardcodedCred[1].password) ||
      (username === hardcodedCred[2].email &&
        password === hardcodedCred[2].password)
    ) {
      //combination is good. Log them in.
      //this token can be anything. You can use random.org to generate a random string;
      const token = "123456abcdef";
      sessionStorage.setItem("auth-token", token);
      //go to www.website.com/admin/home
      history.push("/admin/home");
    } else {
      //bad combination
      alert("wrong email or password combination");
    }
  };

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
          {props.foodie ? (
            <input
              type="submit"
              name="submit"
              value="Login"
              className="fade"
              onClick={loginFoodie}
            />
          ) : (
            ""
          )}
          {props.admin ? (
            <input
              type="submit"
              name="submit"
              value="Login"
              className="fade"
              onClick={handleLoginSubmit}
            />
          ) : (
            ""
          )}
          {props.restaurant ? (
            <input
              type="submit"
              name="submit"
              value="Login"
              className="fade"
              onClick={loginRestaurant}
            />
          ) : (
            ""
          )}
          {props.driver ? (
            <input
              type="submit"
              name="submit"
              value="Login"
              className="fade"
              onClick={handleLoginSubmit}
            />
          ) : (
            ""
          )}
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
