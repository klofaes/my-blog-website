import React, { Component, Fragment } from "react";

class Signin extends Component {
	constructor() {
		super();
		this.state = { user: '', password: '', formType: "signin"};
   }

   onFormSubmit(data) {
      data.preventDefault();
      this.props.onSubmit(this.state);
   }

	render() {
		return (
			<Fragment>
				<form onSubmit={data => this.onFormSubmit(data)}>
					<div className="first user">
						<label htmlFor="uname-id">Enter username/email-id</label>
						<input
							id="uname-id"
							type="text"
							value={this.state.user}
							onChange={(inp) => {
								this.setState({ user: inp.target.value });
							}}
						></input>
					</div>
					<div className="second pass">
						<label htmlFor="password">Enter password</label>
						<input
							id="password"
							type="password"
							value={this.state.password}
							onChange={(inp) => {
								this.setState({ password: inp.target.value });
							}}
						></input>
					</div>
					<input
						type="submit"
						className="submit button"
						value="Submit"
					></input>
				</form>
			</Fragment>
		);
	}
}

export default Signin;
