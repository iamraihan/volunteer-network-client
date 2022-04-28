import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // console.log(user);
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    // if (loading) {
    //     return <p>Loading</p>
    // }
    if (user) {
        // console.log(user?.user?.email);
        const url = 'http://localhost:5000/login'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user.user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('accessToken', data.token)
                navigate(from, { replace: true });
            });



    }
    return (
        <div className='login-from'>

            <form>

                <input type="email" placeholder='Email' /> <br />
                <input type="password" placeholder='Password' /> <br />
                <input type="button" value="Login" />
                <div className='user'>
                    <p>New User?</p>
                    <Link to='/register'><p>Create Account</p></Link>
                </div>
            </form>
            <button onClick={() => { signInWithGoogle() }} className='google-btn'>Google</button>
        </div>
    );
};

export default Login;