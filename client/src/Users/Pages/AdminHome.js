import React ,{useState} from 'react'

import './AdminHome.css'
import { NavHome } from '../Components/NavHome'
export const AdminHome = (props) => {
    
    return (
        <>        
        <NavHome request1="Driver Request" request2="Restaurant Request" redirect= "admin" isnotdriver ={true}/>
    <h2 className="title">Restaurant Request</h2>   
    <center>
    <div class="container"><table style ={{width:"100%"}} className="test"> 

<th align="left"> Restaurant Image </th> 
<th align="left"> Restaurant Name </th>
 <th align="left">Restaurant Mobile </th> 
 <th align="left">Restaurant City </th>
 <th align="left">Restauran State</th>
 <th align="left">Accept</th>
 <th align="left">Deny</th>
 </table>
 </div>     
 </center>  
    <h2 className="title">Driver Request</h2>
        <div className="request-container">
            
        </div>
    </>



        

    )
}
