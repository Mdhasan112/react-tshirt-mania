import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h4>Aunty</h4>
            <p>{ring}</p>
        </div>
    );
};

export default Aunty;