import React, { Component } from "react";
import FormElementStyles from "../styles/Form.module.css";

class SignUpForm extends Component {
  render() {
    return (
      <div className={FormElementStyles.mainDiv}>
        <h1>SignUp Form</h1>
        <div className={FormElementStyles.elementContainer1}>
          <div>
            <input
              type="text"
              name="name"
              className={FormElementStyles.inputField}
              required
              placeholder="Name"
            ></input>
          </div>
          <br />
          <div>
            <input
              type="text"
              name="email"
              className={FormElementStyles.inputField}
              required
              placeholder="email"
            ></input>
          </div>
          <br />
          <div>
            <input
              type="password"
              name="password"
              className={FormElementStyles.inputField}
              required
              placeholder="password"
            ></input>
          </div>
          <br />
          <div>
            <input
              type="password"
              name="confirmPassword"
              className={FormElementStyles.inputField}
              required
              placeholder="confirm Password"
            ></input>
          </div>
          <br />
        </div>
      </div>
    );
  }
}
export default SignUpForm;
