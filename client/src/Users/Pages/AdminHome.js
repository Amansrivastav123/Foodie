import React from 'react'

import './AdminHome.css'
import { NavHome } from '../Components/NavHome'
export const AdminHome = (props) => {
    const restaurantRequest=[{}];
    return (
        <>        
        <NavHome request1="Driver Request" request2="Restaurant Request" redirect= "admin" isnotdriver ={true}/>
    <h2 className="title">Restaurant Request</h2>   
        <div className="request-container">
            
        </div>          
    <h2 className="title">Driver Request</h2>
        <div className="request-container">
            
        </div>
    </>



        

    )
}
