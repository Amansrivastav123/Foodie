import React from 'react'

export const RestaurantRequest = (props) => {
    return (
        <>
        <tr class="border"> 

<td>{props.image}</td>
<td>{props.name}</td>
<td>{props.mobile}</td>
<td>{props.city}</td>
<td>{props.state}</td>

</tr>
        </>
    )
}
