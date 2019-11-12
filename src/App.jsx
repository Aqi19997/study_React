//引入React
import React, { Component } from "react";
//引入routers
import routes from "./config/routes.js";
//引入两个路由组件
import Login from "./pages/Login/Login.jsx";
import Admin from "./pages/Admin/Admin.jsx";
//引入路由
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
