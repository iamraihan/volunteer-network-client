import React from 'react';
import './AddVolunteer.css'

const AddVolunteer = () => {
    return (
        <div className='add-volunteer-container'>

            <form>
                <h2>Add a Volunteer</h2>
                <input type="text" placeholder='image' /> <br />
                <input type="text" placeholder='Name' />
                <input type="button" value="Submit" />
            </form>
        </div>
    );
};

export default AddVolunteer;