import React from 'react'

import HarrowData from './data/Harrow.json';

export default function Table({city, category}) {
    console.log(city)
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Website</th>
                <th>Phone Number</th>
                <th>Address</th>
            </tr>
            
            {city["pharmacies"].map((data, key) => {
                return (
                    <tr key={key}>
                        <td>{data.name}</td>
                        <td>{data.website}</td>
                        <td>{data.phone}</td>
                        <td>{data.address}</td>
                    </tr>
                )
            })}

        </table> 
    )
}
