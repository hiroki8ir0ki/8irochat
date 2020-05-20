import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import Register from "./component/Auth/Register";
import Login from "./component/Auth/Login";
import "semantic-ui-css/semantic.min.css";
import firebase from "./firebase";
import { setUser, clearUser } from "./actions";
import Spinner from "./Spinner";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //console.log(user)
        this.props.setUser(user);
        this.props.history.push("/");
      } else {
        this.props.history.push("/login");
        this.props.dispatch(clearUser());
      }
    });
  }
  render() {
    return this.props.isLoading ? (
      <Spinner />
    ) : (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }
}

const mapStateFromProps = (state) => ({
  isLoading: state.user.isLoading,
});

const RootWithAuth = withRouter(
  connect(mapStateFromProps, { setUser, clearUser })(Root)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.getElementById("root")
);
