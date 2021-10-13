import React from 'react'
import { Nav } from '../Components/Nav'
import { LoginContainer } from '../Components/LoginContainer'
import image from '../../Image/delivery_boy.png'
import './Driver.css'
export const Driver = () => {
    return (
        <div className="bgd">
           <Nav home ={true}/>
           <div style ={{marginRight:"auto",marginLeft:"30px",marginTop:"50px"}}>
           <LoginContainer loginType = "Driver" username ="Mobile" signup ="signup" image = {image} link="driverRegistration"/> 
           </div>
        </div>
    )
}
