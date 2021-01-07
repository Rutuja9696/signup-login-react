import { Component } from "react";
import LoginForm from "../components/LoginForm";

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <LoginForm />
            <button>Login</button>
            <button>Reset</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
