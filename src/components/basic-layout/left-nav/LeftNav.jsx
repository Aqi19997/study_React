import React, { Component } from "react";
import { Menu, Icon } from "antd";
//引入菜单数据
import menus from "../../../config/menus.js";

const { SubMenu } = Menu;

class LeftNav extends Component {
  //创建一级菜单
  createCmenus = menu => {
    return (
      <Menu.Item key={menu.key}>
        <Icon type={menu.icon} />
        <span>{menu.title}</span>
      </Menu.Item>
    );
  };
  //创建菜单
  createMenus = () => {
    return menus.map(menu => {
      //判断是否拥有二级菜单
      if (menu.children) {

        return (
          <SubMenu
            key={menu.key}
            title={
              <span>
                <Icon type={menu.icon} />
                <span>{menu.title}</span>
              </span>
            }
          >
            {menu.children.map(cMenu => {
              //二级菜单cMenu
              return this.createCmenus(cMenu);
            })}
          </SubMenu>
        );
      } else {
        //一级菜单
        return this.createCmenus(menu);
      }
    });
  };
  render() {
    //调用方法显示菜单
    const menus = this.createMenus();
    return (
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {menus}
      </Menu>
    );
  }
}

export default LeftNav;
