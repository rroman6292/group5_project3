import React from 'react'
import '../../App.css';
import '../HeroSection/HeroSection.css';
import { ButtonHome } from '../ButtonHome/Button';
import { ButtonLand } from '../ButtonLand/Button';
// import '../HeroSection/HeroSection.css';
import './style.css';
// import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';


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
      //   <div className = 'hero-container'>
      //       <img src = '/images/landscaping3.jpg' alt ="landscaping"></img>
      //       <h1> </h1>
      // < div className='hero-btns'>
      //   <Button
      //     className='btns'
      //     buttonStyle='btn--outline'
      //     buttonSize='btn--large'
      //   >
      //    Homeowners Login
      //   </Button>
      //   <Button
      //     className='btns'
      //     buttonStyle='btn--outline'
      //     buttonSize='btn--large'
      //   >
      //    Landscapers Login
      //   </Button>
      //   </div>    
      //   </div>
      <section class="hero is-danger is-fullheight" id="hero-signup">
      <div class="hero-body">
        <div class="btn-container">
          <Link to="/sign-up-homeowner">
            <button class="button is-black">Homeowner Login</button>
          </Link>
          <Link to="sign-up-landscaper">
          <button class="button is-black" id="btn-right">Landscaper Login</button>
          </Link>
        </div>
      </div>
    </section>




    );
}

export default LoginSection;
