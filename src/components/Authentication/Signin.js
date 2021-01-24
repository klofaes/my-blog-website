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
					<h1 className="heading1">Sign in</h1>
					<div className="input-fields">
						<div className="first user">
							<input
								id="uname-id"
								type="text"
								placeholder="Email/Username"
								value={this.state.user}
								onChange={(inp) => {
									this.setState({user: inp.target.value});
								}}
							></input>
						</div>
						<div className="second pass">
							<input
								id="password"
								type="password"
								placeholder="Password"
								value={this.state.password}
								onChange={(inp) => {
									this.setState({password: inp.target.value});
								}}
							></input>
						</div>
					</div>
					<button>Sign In</button>
				</form>
			</Fragment>
		);
	}
}

export default Signin;
