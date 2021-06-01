import React from 'react'
import '../../App.css';
import './About.css';
// import { Button } from '../Button/Button';

function About() {
    return (
        <>
        <div className = 'hero-container'>
            <img src = '/images/landscaping4.jpg' alt ="landscaping"></img>
        </div>
        <div className = 'form-container'>
            <p>
            Created in 2021, we are a matchmaking landscaping to homeowner business.  We pride ourselves in serving local communities by creating a space for small businesses to market to their neighbors. Join our community today to help develop yours. 
            </p>
        </div>
        </>
    );
}

export default About;
