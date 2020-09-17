import React, { Component } from 'react'
import "./signin.css"
export default class Signin extends Component {
  render() {
    return (
      <div className="signin-container">
        <div className="flag signin">
          <h1>Signin</h1>
        </div>
        <div className="flag signup">
          <h1>Signup</h1>
        </div>
        <div className="signin-form">
          <form action="">
            <label htmlFor="email">Email</label>
            <input type="text" name="" id="email" required />
            <label htmlFor="password">Password</label>
            <input type="text" name="" id="password" required />
            <button>Submit</button>
          </form>
        </div>
        <div className="signup-form"></div>
      </div>
    );
  }
}
