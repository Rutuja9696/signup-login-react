import { Component } from "react";
import { Link } from "react-router-dom";
import indexStyle from "../styles/Index.module.css";

class Index extends Component {
  render() {
    return (
      <div className={indexStyle.divIndex}>
        <h1 className={indexStyle.indexh1}>WELCOME !</h1>
        <div className={indexStyle.divButton}>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Index;
