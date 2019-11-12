import React, { Component } from 'react';
//引入验证组件
import WithCheckLogin from '../../containers/with-check-login/WithCheckLogin.jsx'
//引入基础组件
import BasicLayout from '../basic-layout/BasicLayout.jsx'
//引入样式文件
import './Admin.less'

@WithCheckLogin
class Admin extends Component {
  render() {
    return (
      <div>
        <BasicLayout />
      </div>
    );
  }
}

export default Admin;
