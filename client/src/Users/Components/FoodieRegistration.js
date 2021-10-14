import React,{useState} from "react";
import Axios from "axios";
export const FoodieRegistration = () => {
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
      <div class="input-group">
        <input
          class="input--style-2"
          type="text"
          placeholder="First Name"
          name="fname"
          required
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
          required
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
          required
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
          required
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
  );
};
