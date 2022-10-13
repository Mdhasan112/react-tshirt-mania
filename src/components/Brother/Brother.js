import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = ({house}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h3>Brother</h3>
            <p>House: {ring}</p>
        </div>
    );
};

export default Brother;