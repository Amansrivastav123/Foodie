import React from 'react'
import image from '../Components/foodie_logo.jpg'
import { Link } from 'react-router-dom'
import './AdminHome.css'
export const AdminHome = (props) => {
    const restaurantRequest=[{}];
    return (
        <>        
        <nav id="admin-nav">
      <img src={image} alt="" className="inline" id="logo" />
      <h1  className="inline">
        FOODIE
      </h1>

      {props.home? <div className="topnav-right">
       <Link to="/admin">
        <div className ="request" style={{marginRight:"0px"}}>
        <input type="submit" name="submit" value="Logout" className="fade" style={{marginTop:"0px"}} />
        </div>
        </Link>
      </div>:""}
      <h6 className = "request">Driver Request</h6>
        <h6 className="request">Restaurant Request</h6>
        

     
    </nav>
    <h2 className="title">Restaurant Request</h2>   
        <div className="request-container">
            
        </div>          
    <h2 className="title">Driver Request</h2>
        <div className="request-container">
            
        </div>
    </>



        

    )
}
