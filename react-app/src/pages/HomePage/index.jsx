import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle ={
    color: '#663399'
};

const Homepage = () => {
    return (
        <>
            <h1>TOP TV</h1>
            <em>All about the smaller silver screen</em>
            <ul>
                <li><Link to="/shows" style={linkStyle}>Explore Shows</Link></li>
                <li><Link to="search" style={linkStyle}>Search for your favourite show</Link></li>
            </ul>
        </>
    )
};

export default Homepage;