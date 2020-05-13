import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import Register from "./component/Auth/Register";
import Login from "./component/Auth/Login";
import 'semantic-ui-css/semantic.min.css'; 

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
