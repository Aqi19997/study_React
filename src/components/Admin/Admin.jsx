import React, { Component } from 'react';
//引入验证组件
import WithCheckLogin from '../../containers/with-check-login/WithCheckLogin.jsx'
//引入样式文件
import './Admin.less'

@WithCheckLogin
class Admin extends Component {
  render() {
    return (
      <div>
        Admin
      </div>
    );
  }
}

export default Admin;
