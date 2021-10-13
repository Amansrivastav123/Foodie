import React from 'react'
import { Nav } from '../Components/Nav'
import { LoginContainer } from '../Components/LoginContainer'
import image from '../../Image/restaurant2.jpg'
import './Restaurant.css'
export const Restaurant = () => {
    return (
        <div className ="bgr">
            <Nav home={true} />
            <div style ={{ marginLeft:"1000px",marginTop:"20px"}}>
            <LoginContainer loginType = "Restaurant" username ="Username" signup ="Add Restaurant"image ={image} link="restaurantRegistration"/>
            </div>
        </div>
    )
}
