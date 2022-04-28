import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './AddVolunteer.css'

const AddVolunteer = () => {
    const [user, loading, error] = useAuthState(auth);

    const addVolunteerHandler = event => {
        event.preventDefault()
        const img = event.target.img.value
        const title = event.target.title.value
        const description = event.target.description.value

        fetch('http://localhost:5000/volunteer', {
            method: 'POST',
            body: JSON.stringify({
                img,
                title,
                description
            }),
            headers: {
                'authorization': `${user.email} ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                event.target.reset()
            });

    }
    return (
        <div className='add-volunteer-container'>

            <form onSubmit={addVolunteerHandler}>
                <h2>Add a Volunteer</h2>
                <input type="text" name='img' placeholder='image' /> <br />
                <input type="text" name='title' placeholder='Name' />
                <input type="text" name='description' placeholder='Description' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddVolunteer;