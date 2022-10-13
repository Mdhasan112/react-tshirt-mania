import React, { createContext, useState } from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './Grandpa.css'

export const RingContext = createContext("hello");
const Grandpa = () => {
    const [house, setHouses] = useState(0);
    const handleBuyHouse = () => {
        const newHouse = house + 1;
        setHouses(newHouse)
    }
    const home = 'Tazmahal'
    return (
        <RingContext.Provider value={[house, setHouses]}>
            <div className='grandpa'>
            <h3>Grand pa</h3>
            <p>House: {house}</p>
            <button onClick={handleBuyHouse}>Buy A House</button>
           <div style={{display: "flex"}}>
           <Father house={house}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
           </div>
        </div>
        </RingContext.Provider>
    );
};

export default Grandpa;