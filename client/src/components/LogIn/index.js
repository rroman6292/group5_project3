import React from 'react';
// import '../../App.css';
import './style.css';

function LogIn() {
    return (
        <div class="container">
            <div class="field">
                <label class="label">Username/Email</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input"></input>
                </div>
            </div>

            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input"></input>
                </div>
                <button class="button is-black">Log In</button>
            </div>
            
        </div>
    );
}

export default LogIn;