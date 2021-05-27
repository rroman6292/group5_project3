import React from 'react'
import '../../App.css';
import '../HeroSection/HeroSection.css';
import { ButtonHome } from '../ButtonHome/Button';
import { ButtonLand } from '../ButtonLand/Button';

function LoginSection() {

    return (
        <div className = 'hero-container'>
            <img src = '/images/landscaping3.jpg' alt ="landscaping"></img>
            <h1> </h1>
      < div className='hero-btns'>
        <ButtonHome
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         Homeowners Login
        </ButtonHome>
        <ButtonLand
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         Landscapers Login
        </ButtonLand>
        </div>    
        </div>
    );
}

export default LoginSection;
