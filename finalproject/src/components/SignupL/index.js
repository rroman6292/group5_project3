import React, { Component } from "react";
import "./style.css";

class SignUpL extends Component {
    // Setting the component's initial state
    state = {
        landscaperName: "",
        landscaperEmail: "",
        landscaperPassword: "",
        landscaperAddress: "",
        landscaperZipCode: "",
        landscaperPhone: "",
        landscaperServices: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.landscaperName} ${this.state.landscaperZipCode}`);
        this.setState({
            landscaperName: "",
            landscaperEmail: "",
            landscaperPassword: "",
            landscaperAddress: "",
            landscaperPhone: "",
            landscaperZipCode: "",
            landscaperServices: ""
        });
    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div class="form-container">

                <div class="field">
                    <label class="label">Company Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Enter Name"></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Company Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="Enter Email"></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="Enter Password"></input>
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
                        <input class="input" type="number" placeholder="Enter Phone Number"></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Address</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Enter Address"></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Zip Code</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Enter Zip Code"></input>
                    </div>
                </div>

                <div  >
                    <label class="label">Description and Services Provided</label>
                    <textarea class="textarea" placeholder="Tell us about your company and your services"></textarea>
                    <button class="button is-primary" id="create-btn">Create Account</button>
                </div>
          
            </div>
        );
    }
}

export default SignUpL;