import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const {name, picture, price} = tshirt
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;