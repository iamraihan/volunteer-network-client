import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='login-from'>

            <form>
                <button className='google-btn'>Google</button>
                <input type="email" placeholder='Email' /> <br />
                <input type="password" placeholder='Password' /> <br />
                <input type="button" value="Login" />
                <div className='user'>
                    <p>New User?</p>
                    <p>Create Account</p>
                </div>
            </form>
        </div>
    );
};

export default Login;