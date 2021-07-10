import React, { useState } from 'react';

import HeathrowData from './data/Heathrow.json';
import HarrowData from './data/Harrow.json';
import StratfordData from './data/Stratford.json';

import Table from './Table';

export default function SelectCity() {
    let [ cityData, setCityData ] = useState([]);

    const changeCity = (e) => {
        e.preventDefault();
        let cityValue = e.target.value;

        if (cityValue === "Harrow") {
            setCityData(HarrowData);
        }

        else if (cityValue === "Heathrow") {
            setCityData(HeathrowData);
        }

        else if (cityValue === "StratfordData") {
            setCityData(StratfordData);
        }


        return cityData;
    }


    return (
        <section>
            <select onChange={changeCity}>
                <option value="Choose city">Choose a city</option>
                <option value="Harrow">Harrow</option>
                <option value="HeathrowData">Heathrow</option>
                <option value="StratfordData">Stratford</option>
            </select>

            <Table city={cityData}/>
        </section>
    )
}
