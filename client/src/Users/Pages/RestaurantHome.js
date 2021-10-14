import React from 'react'
import { NavHome } from '../Components/NavHome'

export const RestaurantHome = () => {
    return (
       <>
       <NavHome request1="Menu" request2="Orders" isnotdriver ={true} redirect ="restaurant"  />
       </>
    )
}
