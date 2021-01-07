import { Component } from "react";
import LoginForm from "../components/LoginForm";
import FormElementStyles from "../styles/Form.module.css";

class Login extends Component {
  render() {
    return (
      <div className={FormElementStyles.body}>
        <div className={FormElementStyles.container}>
          <form>
            <LoginForm />
            <div className={FormElementStyles.buttons}>
              <button
                type="submit"
                value="login"
                className={FormElementStyles.button}
              >
                Login
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
export default Login;
