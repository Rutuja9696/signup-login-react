import { Component } from "react";
import LoginForm from "../components/LoginForm";
import FormElementStyles from "../styles/Form.module.css";

class Login extends Component {
  loginUser = (event) => {
    event.preventDefault();
    let form = event.target;
    let formObj = new FormData();
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
        alert("Logged in Successfully");
        console.log(data);
      })
      .catch((err) => {
        alert(`${form.name.value}, Please try to sign up first:)`);
        alert(err);
        console.log(err);
      });
  };
  render() {
    return (
      <div className={FormElementStyles.body}>
        <div className={FormElementStyles.container}>
          <form onSubmit={this.loginUser}>
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
