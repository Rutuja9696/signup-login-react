import React, { Component } from "react";
// import { render } from "react-dom";
// import cardStyle from "../styles/Card.module.css";
import FormElementStyles from "../styles/Form.module.css";

class LoginForm extends Component {
  render() {
    return (
      <>
        <div className={FormElementStyles.mainDiv}>
          <h1>Login Form</h1>
          <div className={FormElementStyles.elementContainer1}>
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
                type="text"
                name="password"
                className={FormElementStyles.inputField}
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
