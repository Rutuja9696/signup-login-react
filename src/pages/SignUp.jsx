import { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import FormElementStyles from "../styles/Form.module.css";

class SignUp extends Component {
  signupUser = (event) => {
    event.preventDefault();
    let form = event.target;
    let formObj = new FormData();
    formObj.append("name", form.name.value);
    formObj.append("email", form.email.value);
    formObj.append("password", form.password.value);

    fetch(url, {
      method: "POST",
      mode: "cors",
      body: formObj,
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
