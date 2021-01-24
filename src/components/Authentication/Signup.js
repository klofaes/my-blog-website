import React, {Component, Fragment} from "react";

class Signin extends Component {
   constructor(props) {
      super(props);
      this.state = {userName: '', id: '', password: '', formType: "signup"};
   }

   onFormSubmit(form) {
      form.preventDefault();
      this.props.onSubmit(this.state);
   }

   render() {
      return (
         <Fragment>
            <form onSubmit={data => this.onFormSubmit(data)}>
               <h1 className="heading1">Create Account</h1>
               <div className="input-fields">
                  <div className="name-field">
                     <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={this.state.userName}
                        onChange={(inp) => {
                           this.setState({userName: inp.target.value});
                        }}
                     ></input>
                  </div>
                  <div className="id-field">
                     <input
                        id="email-id"
                        type="email"
                        placeholder="Email"
                        value={this.state.id}
                        onChange={(inp) => {
                           this.setState({id: inp.target.value});
                        }}
                     ></input>
                  </div>
                  <div className="pass-field">
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
               <button>Sign Up</button>
            </form>
         </Fragment>
      );
   }
}

export default Signin;
