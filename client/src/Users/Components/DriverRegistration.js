import React,{useState} from "react";
import Axios from "axios";
export const DriverRegistration = () => {

  
const [driver_name, setdriver_name] = useState("");
const [driver_mobile, setdriver_mobile] = useState("");
const [driver_city,setdriver_city] = useState("");
const [driver_password, setdriver_password] = useState("");

const requestdriver = () => {
  Axios.post("http://localhost:3001/requestdriver", {
    d_name: driver_name,
    d_mobile: driver_mobile,
    d_city: driver_city,
    d_password: driver_password,
  }).then((response) => {
    console.log(response);
  });
};

  return (
    <>
      <div class="input-group">
        <input
          class="input--style-2"
          type="text"
          placeholder="Name"
          name="driver_name"
          onChange={(e) => {
            setdriver_name(e.target.value);
          }}
        />
      </div>

      <div class="input-group">
        <input
          class="input--style-2"
          type="text"
          placeholder="Mobile"
          name="driver_mobile"
          onChange={(e) => {
            setdriver_mobile(e.target.value);
          }}
        />
      </div>

      <div class="input-group">
        <input
          class="input--style-2"
          type="text"
          placeholder="City"
          name="driver_city"
          onChange={(e) => {
            setdriver_city(e.target.value);
          }}
        />
      </div>
      <div class="input-group">
        <input
          class="input--style-2"
          type="password"
          placeholder="Password"
          name="driver_password"
          onChange={(e) => {
            setdriver_password(e.target.value);
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
          onClick={requestdriver}
        />
      </div>
    </>
  );
};
