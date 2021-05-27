import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style.css';
import axios from 'axios'



class LogInLand extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: false,
        };
      }

    

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };
    handleSubmitFunction = async () => {
        axios.post("/api/landscape/login", this.state).then((response) => {
            console.log("logged in!");
            console.log(response);
            this.setState({ redirect: true });
            this.props.login(response.data.user);
            
        })
    }


    render() {

        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/profile-landscaper' />;
        }

        return (
            <div class="container">
                <div class="field">
                    <label class="label">Username/Email</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input" name="email" onChange={this.handleInputChange}></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input" name="password" onChange={this.handleInputChange}></input>
                    </div>
                    <button class="button is-black" onClick={this.handleSubmitFunction}>Log In</button>
                </div>

            </div>
        );
    }

}

export default LogInLand;