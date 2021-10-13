import React from 'react'
import './NavHome.css'
import image from '../Components/foodie_logo.jpg'
import { Link } from 'react-router-dom'

export const NavHome = (props) => {
    return (
        <nav id="admin-nav">
      <img src={image} alt="" className="inline" id="logo" />
      <h1  className="inline">
        FOODIE
      </h1>

       <div className="topnav-right">
       <Link to={`/${props.redirect}`}>
        <div className ="request" style={{marginRight:"0px"}}>
        <input type="submit" name="submit" value="Logout" className="fade" style={{marginTop:"0px"}} />
        </div>
        </Link>
      </div>
      
        {props.isnotdriver?<><h6 className = "request">{props.request1}</h6>
        <h6 className="request">{props.request2}</h6></>: ""}
        

     
    </nav>
    )
}
