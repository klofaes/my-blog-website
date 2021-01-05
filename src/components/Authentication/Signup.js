import React, {Component, Fragment} from "react";

class Signin extends Component {
   constructor(props) {
      super(props);
      this.state = {userName: '', id: '', password: ''};
   }

   onFormSubmit(form) {
      form.preventDefault();
      this.props.onSubmit(this.state);
   }

   render() {
      return (
         <Fragment>
            <form onSubmit={data => this.onFormSubmit(data)}>
               <div className="name-field">
                  <label for="username">Enter UserName: </label>
                  <input
                     id="username"
                     type="text"
                     value={this.state.userName}
                     onChange={(inp) => {
                        this.setState({userName: inp.target.value});
                     }}
                  ></input>
               </div>
               <div className="id-field">
                  <label for="email-id">Enter ID: </label>
                  <input
                     id="email-id"
                     type="email"
                     value={this.state.id}
                     onChange={(inp) => {
                        this.setState({id: inp.target.value});
                     }}
                  ></input>
               </div>
               <div className="pass-field">
                  <label for="password">Enter Password</label>
                  <input
                     id="password"
                     type="password"
                     value={this.state.password}
                     onChange={(inp) => {
                        this.setState({password: inp.target.value});
                     }}
                  ></input>
               </div>
               <input type="submit" value="Submit"></input>
            </form>
         </Fragment>
      );
   }
}

export default Signin;
