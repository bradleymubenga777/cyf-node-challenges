import React from 'react'

import HarrowData from './data/Harrow.json';

export default function Table({city, category}) {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Website</th>
                <th>Phone Number</th>
                <th>Address</th>
            </tr>
            
            {city.length > 0 ? (city["pharmacies"].map((data, key) => {
                return (
                    <tr key={key}>
                        <td>{data.name}</td>
                        <td>{data.website}</td>
                        <td>{data.phone}</td>
                        <td>{data.address}</td>
                    </tr>
                )
            })) : (<h1>Hello</h1>)}

        </table> 
    )
}
