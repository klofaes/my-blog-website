import axios from "axios";
import React, { Component, Fragment } from "react";

import Signin from "./Signin";
import Signup from "./Signup";

import "./Auth.css";

class Auth extends Component {
	onFormSubmit = async (userCredentials) => {
		try {
			if (userCredentials.formType === "signup") {
				const response = await axios.post(
					"http://localhost:5000/user/add",
					{
						userCredentials,
					}
				);

				response.status === 200 && alert("Welcome New User!");
			} else if (userCredentials.formType === "signin") {
				const response = await axios.post(
					"http://localhost:5000/user/get",
					{
						userCredentials,
					}
				);

				response.status === 200 && alert("Welcome Back!");
			}
		} catch (err) {
			console.error(`Response err - auth.js == ${err}`);
		}
   }

   componentDidMount() {
      const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const container = document.getElementById('container');

      signUpButton.addEventListener('click', () => {
         container.classList.add("right-panel-active");
      });

      signInButton.addEventListener('click', () => {
         container.classList.remove("right-panel-active");
      });
   }

	render() {
		return (
			<Fragment>
            <div className="auth-container" id="container">
					<div className="form-container sign-up-container">
						<Signup onSubmit={this.onFormSubmit} />
					</div>
					<div className="form-container sign-in-container">
						<Signin onSubmit={this.onFormSubmit} />
					</div>
					<div className="overlay-container">
						<div className="overlay">
							<div className="overlay-panel overlay-left">
                        <h1 className="heading1">Welcome Back!</h1>
								<p className="para">To keep connected with us please login with your personal info</p>
								<button className="ghost" id="signIn">Sign In</button>
							</div>
							<div className="overlay-panel overlay-right">
                        <h1 className="heading1">Hello, Friend!</h1>
                        <p className="para">Enter your personal details and start journey with us</p>
								<button className="ghost" id="signUp">Sign Up</button>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Auth;
