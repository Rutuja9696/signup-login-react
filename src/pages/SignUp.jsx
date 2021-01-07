import { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import FormElementStyles from "../styles/Form.module.css";

class SignUp extends Component {
  render() {
    return (
      <div className={FormElementStyles.body}>
        <div className={FormElementStyles.container}>
          <form>
            <SignUpForm />
            <div className={FormElementStyles.buttons}>
              <button
                type="submit"
                value="signUp"
                className={FormElementStyles.button}
              >
                Sign Up
              </button>

              <button
                type="reset"
                value="Reset"
                className={FormElementStyles.button}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
