import React, { Component } from "react";
import "./style.css";
import axios from "axios";


class SignUpL extends Component {
    // Setting the component's initial state
    state = {
        company_name: "",
        company_email: "",
        password: "",
        address: "",
        company_phone: "",
        zip: "",
        services: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });

        console.log(this.state.company_name)
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        axios.post("/api/landscape", this.state).then(() => {
            console.log("user created")
        })

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.company_name} ${this.state.zip}`);
        console.log(this.state)
        this.setState({
            company_name: "",
            company_email: "",
            password: "",
            address: "",
            company_phone: "",
            zip: "",
            services: ""
        });
        console.log(this.state)

    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div class="container">

                <div class="field">
                    <label class="label">Company Name</label>
                    <div class="control">
                        <input class="input" type="text" name="company_name" onChange={this.handleInputChange} placeholder="Enter Name"></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Company Email</label>
                    <div class="control">
                        <input class="input" type="email" name="company_email" onChange={this.handleInputChange} placeholder="Enter Email"></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" name="password" onChange={this.handleInputChange} placeholder="Enter Password"></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Confirm Password</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="Password must match"></input>
                    </div>
                </div>


                <div class="field">
                    <label class="label">Company Phone Number</label>
                    <div class="control">
                        <input class="input" type="number" name="company_phone" onChange={this.handleInputChange} placeholder="Enter Phone Number"></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Address</label>
                    <div class="control">
                        <input class="input" type="text" name="address" onChange={this.handleInputChange} placeholder="Enter Address"></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Zip Code</label>
                    <div class="control">
                        <input class="input" type="number" name="zip" onChange={this.handleInputChange} placeholder="Enter Zip Code"></input>
                    </div>
                </div>

                <div  >
                    <label class="label">Description and Services Provided</label>
                    <textarea class="textarea" placeholder="Tell us about your company and your services"></textarea>
                    <button class="button is-primary" id="create-btn" onClick={this.handleFormSubmit}>Create Account</button>
                </div>

            </div>
        );
    }
}

export default SignUpL;