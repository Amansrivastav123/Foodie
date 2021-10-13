import React from 'react'
import { NavHome } from '../Components/NavHome'
export const DriverHome = () => {
    return (
        <div>
            <NavHome request1="Menu" request2="Orders" isnotdriver ={false} redirect="driver"/>
        </div>
    )
}
