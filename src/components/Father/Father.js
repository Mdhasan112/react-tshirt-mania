import React, { useContext } from 'react';
import Myself from '../Myself/Myself'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'
import { RingContext } from '../Grandpa/Grandpa';

const Father = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h3>Father</h3>
            <p> House: {ring}</p>
            <Myself></Myself>
            <Brother></Brother>
            <Sister></Sister>
        </div>
    );
};

export default Father;