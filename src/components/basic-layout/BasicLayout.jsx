import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import logo from '../../assets/images/logo.png'//import要在const上面书写
import './BasicLayout.less'
//将左边的菜单装成一个组件LeftNav引入进来
import LeftNav from './left-nav/LeftNav'
//引入验证组件
import WithCheckLogin from '../../containers/with-check-login/WithCheckLogin.jsx'


const { Header, Content, Footer, Sider } = Layout;


@WithCheckLogin
class BasicLayout extends Component {
  //状态数据
  state = {
    collapsed: false
    //左侧列表伸缩控制
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="basic-layout-logo" >
            {/* <img src="../../assets/images/logo.png" alt=""/> */}
            {/* 如果直接引入路径文件它不认识,所欲需要在头部引入logo */}
            <img src={logo} alt="logo" />
            <h2 style={{ display: this.state.collapsed ? 'none' : 'block' }}>硅谷后台</h2>
          </div>
          {/* logo位置 */}
          <LeftNav />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {
                //children代表的是当前这个父级组件的所有子级组件
                this.props.children
              }
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
