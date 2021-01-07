import React, { Component } from "react";
import { render } from "react-dom";

class LoginForm extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Login Form</h1>
          <div>
            <div>
              <input
                type="text"
                name="email"
                required
                placeholder="email"
              ></input>
            </div>
            <br />
            <div>
              <input
                type="text"
                name="password"
                required
                placeholder="password"
              ></input>
            </div>
            <br />
          </div>
        </div>
      </>
    );
  }
}
export default LoginForm;
