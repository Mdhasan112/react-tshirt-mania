import React from 'react';

const Cart = ({ cart, handleRemoveCart }) => {
    //conditional rendering option
    //1. Element variable
    //2. ternary operator
    //3. && operator (shorthand)
    //4. || (or)

    let command;
    if (cart.length === 0) {
        command = <div>Please add some Item!!</div>
    }
    else if (cart.length === 1) {
        command = <div>add more Item</div>
    }
    else {
        command = <p><small>Thanks for select</small></p>
    }

    return (
        <div>
            <h3>Total Ordered: {cart.length}</h3>
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveCart(tshirt)}>X</button>
                </p>)
            }
            {/* {command} */}
            {/* {cart.length !==4 ?<p>adding</p> : <button>remove all</button>} */}
            {/* {cart.length ===3 && <div style={{backgroundColor: "orange"}}> hello</div>} */}
            {/* {cart.length === 0 || <div style={{backgroundColor: "orange"}}>you are bying</div>} */}
        </div>
    );
};

export default Cart;