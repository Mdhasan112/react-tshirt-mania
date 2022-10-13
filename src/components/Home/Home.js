import React, { useState } from 'react';
import useTShirt from '../../hooks/usetshirt';
import TShirt from '../TShirt/TShirt'
import Cart from '../Cart/Cart'
import './Home.css'

const Home = () => {
    const [tshirts, setTShirts] = useTShirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = selectedItem => {
        const exists= cart.find(tshirt => tshirt._id === selectedItem._id)
        if(!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart)
        }
        else{
            alert('Item already added')
        }
       
    }
    const handleRemoveCart= selectedItem =>{
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id);
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirt 
                        key={tshirt._id} 
                        tshirt={tshirt} 
                        handleAddToCart={handleAddToCart}
                        >
                        </TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleRemoveCart={handleRemoveCart}
                >

                </Cart>
            </div>
        </div>
    );
};

export default Home;