import React, { Component } from "react";
import "./signin.css";
export default class Signin extends Component {
  state = {
    "signinEmail": "",
    "signinPassword": "",
    "signupName": "",
    "signupEmail": "",
    "signupPassword": "",
  };
  toggleForms = (event) => {
    document.body.classList.toggle("toggle-forms");
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id] : [event.target.value]
    })
  };
  render() {
    return (
      <div className="signin-container">
        <div className="flag signin" onClick={this.toggleForms}>
          <h1>Signin</h1>
        </div>
        <div className="flag signup" onClick={this.toggleForms}>
          <h1>Signup</h1>
        </div>
        <div className="signin-form">
          <form action="">
            <label htmlFor="email" id="signin-email-label">
              Email
            </label>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              id="signinEmail"
              value={this.state.signinEmail}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              id="signinPassword"
              value={this.state.signinPassword}
              required
            />
            <button>Submit</button>
          </form>
        </div>
        <div className="signup-form">
          <form action="">
            <label htmlFor="name" id="signup-name-label">
              Name
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              id="signupName"
              value={this.state.signupName}
              required
            />
            <label htmlFor="email" id="signup-email-label">
              Email
            </label>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              id="signupEmail"
              value={this.state.signupEmail}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              id="signupPassword"
              value={this.state.signupPassword}
              required
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
