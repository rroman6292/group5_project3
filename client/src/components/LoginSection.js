import React from 'react'
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';

function LoginSection() {

    return (
        <div className = 'hero-container'>
            <img src = '/images/landscaping3.jpg' alt ="landscaping"></img>
            <h1> </h1>
      < div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         Homeowners Login
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         Landscapers Login
        </Button>
        </div>    
        </div>
    );
}

export default LoginSection;
