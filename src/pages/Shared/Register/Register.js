import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const naviate = useNavigate()
    return (
        <div className='login-from'>

            <form>
                <button className='google-btn'>Google</button>
                <input type="email" placeholder='Email' /> <br />
                <input type="password" placeholder='Password' /> <br />
                <input type="password" placeholder='Confirm Password' /> <br />
                <input type="button" value="Login" />
                <div className='user'>
                    <p>Already Account?</p>
                    <p onClick={'navigate'}>Login</p>
                </div>
            </form>
        </div>
    );
};

export default Register;