import React, { Component } from 'react';
import { Menu, Icon } from "antd";
//引入菜单数据
import menus from '../../../config/menus.js'

const { SubMenu } = Menu;


class LeftNav extends Component {

  //一级菜单的创建
  createMenus = () => {
    return menus.map(menu => (
      <Menu.Item key={menu.key}>
        <Icon type={menu.icon} />
        <span>{menu.title}</span>
      </Menu.Item>
    ))
  }
  
  render() {
    //调用方法显示菜单
    const menus = this.createMenus()
    return (
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {
          menus
        }
      </Menu>
    );
  }
}

export default LeftNav;