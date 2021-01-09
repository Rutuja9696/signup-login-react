import { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import FormElementStyles from "../styles/Form.module.css";
import url from "../components/ApiCall";

class SignUp extends Component {
  signupUser = (event) => {
    event.preventDefault();
    let form = event.target;
    let formObj = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      confirmPassword: form.confirmPassword.value,
    };
    console.log(formObj);
    fetch(url + "user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(formObj),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        form.reset();
        alert("Signed up Successfully");
        console.log(data);
      })
      .catch((err) => {
        alert(`${form.name.value}, Please try again :)`);
        alert(err);
        console.log(err);
      });
  };
  render() {
    return (
      <div className={FormElementStyles.body}>
        <div className={FormElementStyles.container}>
          <form onSubmit={this.signupUser}>
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
