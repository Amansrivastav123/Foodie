import React, { useState } from "react";
import "./Registration.css";
import Axios from "axios";

import { Link } from "react-router-dom";
export const Registration = (props) => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [foodie_mobile, setfoodie_mobile] = useState("");
  const [foodie_password, setfoodie_password] = useState("");

  const registerfoodie = () => {
    Axios.post("http://localhost:3001/register", {
      firstname: fname,
      lastname: lname,
      mobile: foodie_mobile,
      password: foodie_password,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <>
      <div class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div class="wrapper wrapper--w960">
          <div class="card card-2">
            <div
              class="card-heading"
              style={{
                background: `url("../../Image/${props.image}") top left/cover no-repeat;`,
              }}
            ></div>
            <div class="card-body">
              <h2 class="title">{props.name} Registration Info</h2>
              <h5>
                Already Have An Account ?{" "}
                <Link to={`/${props.loginPage}`}>Log in</Link>
              </h5>
              <hr />
              <form method="POST">
                {props.foodie ? (
                  <>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="text"
                        placeholder="First Name"
                        name="fname"
                        onChange={(e) => {
                          setfname(e.target.value);
                        }}
                      />
                    </div>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="text"
                        placeholder="Last Name"
                        name="lname"
                        onChange={(e) => {
                          setlname(e.target.value);
                        }}
                      />
                    </div>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="text"
                        placeholder="Mobile"
                        name="foodie_mobile"
                        onChange={(e) => {
                          setfoodie_mobile(e.target.value);
                        }}
                      />
                    </div>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="password"
                        placeholder="Password"
                        name="foodie_password"
                        onChange={(e) => {
                          setfoodie_password(e.target.value);
                        }}
                      />
                    </div>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div class="p-t-30">
                      <input
                        class="btn btn--radius btn--green"
                        type="submit"
                        value="Signin"
                        onClick={registerfoodie}
                      />
                    </div>
                  </>
                ) : (
                  ""
                )}

                {props.driver ? (
                  <>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="text"
                        placeholder="Name"
                        name="driver_name"
                      />
                    </div>

                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="text"
                        placeholder="Mobile"
                        name="driver_mobile"
                      />
                    </div>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="text"
                        placeholder="Password"
                        name="driver_password"
                      />
                    </div>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div class="p-t-30">
                      <input
                        class="btn btn--radius btn--green"
                        type="submit"
                        value="Signin"
                      />
                    </div>
                  </>
                ) : (
                  ""
                )}

                {props.restaurant ? (
                  <>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="text"
                        placeholder="Enter Restaurant Name"
                        name="restaurant_name"
                      />
                    </div>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="text"
                        placeholder="Mobile"
                        name="restaurant_mobile"
                      />
                    </div>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="text"
                        placeholder="City"
                        name="restaurant_city"
                      />
                    </div>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="text"
                        placeholder="State"
                        name="restaurant_State"
                      />
                    </div>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="text"
                        placeholder="Username"
                        name="restaurant_username"
                      />
                    </div>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="password"
                        placeholder="Password"
                        name="restaurant_password"
                      />
                    </div>
                    <div class="input-group">
                      <input
                        class="input--style-2"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div class="p-t-30">
                      <input
                        class="btn btn--radius btn--green"
                        type="submit"
                        value="Signin"
                      />
                    </div>
                  </>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Registration.defaultProps = {
  foodie: "false",
  driver: "false",
  restaurant: "false",
};
