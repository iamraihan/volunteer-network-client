import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <Link to='/'>Home</Link>
            <Link to='/'>Donation</Link>
            <Link to='/'>Event</Link>
            <Link to='/'>Blog</Link>
        </header>
    );
};

export default Navbar;