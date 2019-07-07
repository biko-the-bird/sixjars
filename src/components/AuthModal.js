import React, { Component } from "react";

import Gun from 'gun';
require('gun/sea');
const gun = Gun();
const user = gun.user();

export class AuthModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  signup = () => {
    user.create(
      this.state.username,
      this.state.password,
      res => {
        console.log("user created", res);
        console.log("sea2", user._.sea);
        user.recall();
        console.log("sea3", user._.sea);
      },
      []
    );
  };
  login = () => {
    user.create(
      this.state.username,
      this.state.password,
      res => {
        console.log("user created", res);
        console.log("sea2", user._.sea);
        user.leave();
        console.log("sea3", user._.sea);
      },
      []
    );
  };

  validInputs = () => {
    var password = this.state.password;
    var username = this.state.username;
    var errors = [];
    if (password.length < 6) {
      console.log(password.length);
      errors.push("password must be >6 characters");
    }
    if (username === "") {
      errors.push("a username is required");
    }

      
    return (
      <div>
      {(errors.length > 0) 
        ?(
          <ul>
          {errors.map(err => 
            <li key={err}><span className="ghost">{err}</span></li>
          )}
          </ul>
        )
        :(
          <div>
          <button className="ghost-button " onClick={() => this.signup()}>Signup</button>
     
          <button className="ghost-button " onClick={() => this.login()}>Login</button>
          </div>
        )
      
      }
      </div>
    )
     
     
      

      
    
  };

  

  render() {
    return (
      <div className="auth-modal">
        <h1 className="ghost"><u>Sync Account</u></h1>
        <p className="ghost">Email</p>
        <input 
        type="text"
        placeholder="email"
        className="ghost-input username-input" 
        onChange={e => this.setState({username: e.target.value})}
        />
        <br/>

        <p className="ghost">Password</p>
        <input 
        type="password"
        placeholder="password"
        className="ghost-input password-input" 
        onChange={e => this.setState({password: e.target.value})}
        />
        {this.validInputs()}
  
        <div />
      </div>
    );
  }
}
export default AuthModal;
