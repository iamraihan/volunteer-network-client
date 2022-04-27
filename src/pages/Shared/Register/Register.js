import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {


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
                    <Link to='/login'><p>Login</p></Link>
                </div>
            </form>
        </div>
    );
};

export default Register;