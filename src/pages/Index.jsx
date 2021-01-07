import { Component } from "react";
import { Link } from "react-router-dom";
class Index extends Component {
  render() {
    return (
      <div>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    );
  }
}
export default Index;
