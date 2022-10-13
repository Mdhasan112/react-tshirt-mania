import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <h1>Welcome to TShirt Mania</h1>
            <nav className='link'>
            <Link to='/home'>Home</Link>
            <Link to='/orderreview'>Order Review</Link>
            </nav>
        </div>
    );
};

export default Header;