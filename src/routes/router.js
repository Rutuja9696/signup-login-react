import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Index from "../pages/Index";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";
// import LoginForm from "../components/LoginForm";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
export default Router;
