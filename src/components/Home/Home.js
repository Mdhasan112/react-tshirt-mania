import React from 'react';
import useTShirt from '../../hooks/usetshirt';
import TShirt from '../TShirt/TShirt'
import Cart from '../Cart/Cart'
import './Home.css'

const Home = () => {
    const [tshirts, setTShirts] = useTShirt();

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirt key={tshirt._id} tshirt={tshirt}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;