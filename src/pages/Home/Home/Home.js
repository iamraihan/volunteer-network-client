import React, { useEffect, useState } from 'react';
import AllVolunteer from '../AllVolunteer/AllVolunteer';
import './Home.css'

const Home = () => {
    const [volunteers, setVolunteers] = useState([])
    const colors = ['#3F90FC', '#421FCF', '#FFBD3E', '#FF7044']
    // let colorIndex = Math.floor(Math.random() * colors.length);
    let colorIndex = 0

    // console.log(volunteers);
    useEffect(() => {
        fetch('http://localhost:5000/volunteer')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [volunteers])
    return (
        <main className='container'>
            <h1>I grow by helping people in need.</h1>
            <div className="input-with-btn">
                <input type="text" />
                <button>Search</button>
            </div>
            <div className='volunteer-container'>
                {
                    volunteers.map(volunteer => <AllVolunteer color={colors[colorIndex === colors.length - 1 ? colorIndex = 0 : colorIndex++]} key={volunteer._id} volunteer={volunteer}></AllVolunteer>)
                }
            </div>
        </main>
    );
};

export default Home;