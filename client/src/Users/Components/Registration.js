import React from "react";
import "./Registration.css";
 import { Link } from "react-router-dom";
import { RestaurantRegistration } from "./RestaurantRegistration";
import { FoodieRegistration } from "./FoodieRegistration";
import { DriverRegistration } from "./DriverRegistration";
export const Registration = (props) => {
  
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
                  <FoodieRegistration/>
                ) : (
                  ""
                )}

                {props.driver ? (
                  <DriverRegistration/>
                ) : (
                  ""
                )}

                {props.restaurant ? (
                  <RestaurantRegistration/>
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
