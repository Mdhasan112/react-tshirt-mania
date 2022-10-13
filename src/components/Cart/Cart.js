import React from 'react';

const Cart = ({cart, handleRemoveCart}) => {
    console.log(cart)
    return (
        <div>
            <h3>Total Ordered: {cart.length}</h3>
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveCart(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;