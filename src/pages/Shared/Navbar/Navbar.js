import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { getAuth, signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <header>
            <Link to='/'>Home</Link>
            <Link to='/'>Donation</Link>
            <Link to='/'>Event</Link>
            <Link to='/'>Blog</Link>
            <Link to='/add-volunteer'>Add Volunteer</Link>

            {
                user ? <button onClick={logout}>Logout</button> : <Link to='/login'>Login</Link>

            }
        </header>
    );
};

export default Navbar;