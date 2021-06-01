import React from 'react'
import '../../App.css';
import './style.css';
// import { Link } from 'react-router-dom';
import { ButtonSignupHome } from '../ButtonHome/ButtonSignupHome';
import { ButtonSignupLand } from '../ButtonHome/ButtonSignupLand';

function SignUpSection() {

  return (

    <div className='hero-container'>
    <img src='/images/lawncare6.jpg' alt="landscaping"></img>
    <h1> </h1>
    < div className='hero-btns'>
      <ButtonSignupHome
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
      >
        Homeowners Sign-up
      </ButtonSignupHome>
      <ButtonSignupLand
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
      >
        Landscapers Sign-up
      </ButtonSignupLand>
    </div>
  </div>

    // <section class="hero is-danger is-fullheight" id="hero-signup">
    //   <div class="hero-body">
    //     <div class="btn-container">
    //       <Link to="/sign-up-homeowner">
    //         <button class="button is-black">Homeowner Sign Up</button>
    //       </Link>
    //       <Link to="sign-up-landscaper">
    //       <button class="button is-black" id="btn-right">Landscaper Sign Up</button>
    //       </Link>
          
    //     </div>
    //   </div>
    // </section>


  );
}

export default SignUpSection;
