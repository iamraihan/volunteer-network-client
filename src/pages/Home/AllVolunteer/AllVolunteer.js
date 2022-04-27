import React, { useState } from 'react';
import './AllVolunteer.css'

const AllVolunteer = ({ volunteer, color }) => {

    const { title, img } = volunteer

    return (

        <div className='card'>
            <img src={img} alt="" />
            <h4 style={{ backgroundColor: color }}>{title}</h4>

        </div>
    );
};

export default AllVolunteer;