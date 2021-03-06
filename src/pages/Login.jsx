import { Component } from "react";
import LoginForm from "../components/LoginForm";
import FormElementStyles from "../styles/Form.module.css";
import url from "../components/ApiCall";
import Home from "./Home";

class Login extends Component {
  state = {
    status: "",
  };
  loginUser = (event) => {
    event.preventDefault();
    let form = event.target;
    let formObj = {
      email: form.email.value,
      password: form.password.value,
    };
    fetch(url + "user/login", {
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
        console.log(data);
        if (data.data) {
          this.setState({ status: "Successful" });
          form.reset();
          alert("Logged in Successfully");
        }
      })
      .catch((err) => {
        alert(`${form.name.value}, Please try to sign up first:)`);
        alert(err);
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        {this.state.status === "Successful" ? (
          <Home />
        ) : (
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
        )}
      </div>
    );
  }
}
export default Login;
