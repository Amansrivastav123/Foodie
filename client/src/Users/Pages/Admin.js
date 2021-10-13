import React from 'react'
import { Nav } from '../Components/Nav'
import { LoginContainer } from '../Components/LoginContainer'
import image from '../../Image/admin.jpeg'
import './Admin.css'
export const Admin = () => {
    return (
        <div className="bga">
            <Nav home ={true}/>
            <div style ={{marginTop:"50px" ,marginLeft:"1000px"}}>
            <LoginContainer loginType = "Admin" username ="Employee Id" signup ="signup" account={false} image={image}/>
            </div>
        </div>
    )
}
