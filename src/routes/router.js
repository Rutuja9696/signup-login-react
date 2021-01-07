import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "../pages/Index";
import SignUp from "../pages/SignUp";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default Router;
