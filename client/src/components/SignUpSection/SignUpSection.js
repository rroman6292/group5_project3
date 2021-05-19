import React from 'react'
import '../../App.css';
import '../HeroSection/HeroSection.css';
import { Button } from '../Button/Button';

function SignUpSection() {

    return (
        <div className = 'hero-container'>
            <img src = '/images/lawncare4.jpg' alt ="landscaping"></img>
            <h1> </h1>
      < div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         Homeowners Sign Up Here
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         Landscapers Sign Up Here
        </Button>
        </div>    
        </div>
    );
}

export default SignUpSection;
