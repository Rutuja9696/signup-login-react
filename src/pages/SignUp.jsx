import { Component } from "react";
import SignUpForm from "../components/SignUpForm";

class SignUp extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <SignUpForm />
            <button>Submit</button>
            <button>Reset</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
