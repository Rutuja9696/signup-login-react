import { Component } from "react";
import homeStyles from "../styles/Home.module.css";

class Home extends Component {
  render() {
    return (
      <div className={homeStyles.container}>
        <h2 className={homeStyles.message}>Thankyou for logging in!</h2>
        <h3 className={homeStyles.heading}>Excited..!</h3>
        <p className={homeStyles.text}>We are coming soon...stay connected.</p>
      </div>
    );
  }
}
export default Home;
