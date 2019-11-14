//引入React
import React, { Component, Suspense } from "react";
//引入routers
import routes from "./config/routes.js";
//引入路由
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
//引入NotMatch
import NotMatch from './components/not-match/NotMatch.jsx'
//引入基础组件
import BasicLayout from './components/basic-layout/BasicLayout.jsx'
//引入login
import Login from './containers/Login/Login.jsx'
//引入spin(加载中动画组件)\
import { Spin } from 'antd';
class App extends Component {
  render() {
    return (
    <Suspense fallback={<Spin size="large" />}>
        <Router>
          <Switch>
            <Route path="/login" component={Login}  />
            <BasicLayout>
              <Switch>
                {
                  routes.map((route, index) => (<Route key={index} {...route} />))
                }
                <Route component={NotMatch} />
              </Switch>
            </BasicLayout>
          </Switch>
        </Router>
      </Suspense>

    );
  }
}

export default App;
