import React, { useState } from "react";
import Axios from "axios";
export const RestaurantRegistration = () => {
  const [restaurant_name, setrestaurant_name] = useState("");
  const [restaurant_mobile, setrestaurant_mobile] = useState("");
  const [restaurant_city, setrestaurant_city] = useState("");
  const [restaurant_state, setrestaurant_state] = useState("");

  const [restaurant_username, setrestaurant_username] = useState("");
  const [restaurant_password, setrestaurant_password] = useState("");
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await Axios.post("http://localhost:3000/requestrestaurant", {
        formData,
        r_name: restaurant_name,
        r_mobile: restaurant_mobile,
        r_city: restaurant_city,
        r_state: restaurant_state,
        r_username: restaurant_username,
        r_password: restaurant_password,
      });
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <div class="input-group">
        <input
          class="input--style-2"
          type="text"
          placeholder="Enter Restaurant Name"
          name="restaurant_name"
          onChange={(e) => {
            setrestaurant_name(e.target.value);
          }}
        />
      </div>
      <div class="input-group">
        <input
          class="input--style-2"
          type="text"
          placeholder="Mobile"
          name="restaurant_mobile"
          onChange={(e) => {
            setrestaurant_mobile(e.target.value);
          }}
        />
      </div>
      <div class="input-group">
        <input
          class="input--style-2"
          type="text"
          placeholder="City"
          name="restaurant_city"
          onChange={(e) => {
            setrestaurant_city(e.target.value);
          }}
        />
      </div>
      <div class="input-group">
        <input
          class="input--style-2"
          type="text"
          placeholder="State"
          name="restaurant_State"
          onChange={(e) => {
            setrestaurant_state(e.target.value);
          }}
        />
      </div>
      <div class="input-group">
        <input type="file" class="input--style-2" onChange={saveFile} name ="img"/>
      </div>
      <div class="input-group">
        <input
          class="input--style-2"
          type="text"
          placeholder="Username"
          name="restaurant_username"
          onChange={(e) => {
            setrestaurant_username(e.target.value);
          }}
        />
      </div>
      <div class="input-group">
        <input
          class="input--style-2"
          type="password"
          placeholder="Password"
          name="restaurant_password"
          onChange={(e) => {
            setrestaurant_password(e.target.value);
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
          onClick={uploadFile}
        />
      </div>
    </>
  );
};
