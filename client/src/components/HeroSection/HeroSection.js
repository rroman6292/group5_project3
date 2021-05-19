import React from 'react'
import '../../App.css';
import './HeroSection.css';
import { Button } from '../Button/Button';

function HeroSection() {
    return (
        <div className = 'hero-container'>
            <img src = '/images/landscaping1.jpg' alt ="landscaping"></img>
            <h1>JOIN OUR COMMUNITY</h1>
            <p>Read more about us</p>
      < div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         ABOUT US
        </Button>
        </div>    
        </div>
    );
}

export default HeroSection;
