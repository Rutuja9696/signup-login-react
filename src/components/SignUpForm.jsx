import React, { Component } from "react";
import { render } from "react-dom";

class SignUpForm extends Component {
  render() {
    return (
      <>
        <div>
          <h1>SignUp Form</h1>
          <div>
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
              ></input>
            </div>
            <br />
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
            <div>
              <input
                type="text"
                name="confirmPassword"
                required
                placeholder="confirm Password"
              ></input>
            </div>
            <br />
          </div>
        </div>
      </>
    );
  }
}
export default SignUpForm;
