import React, { Component } from "react";
import { Menu, Icon } from "antd";
//引入菜单数据
import menus from "../../../config/menus.js";
import { withRouter, Link } from 'react-router-dom'
const { SubMenu } = Menu;
@withRouter
class LeftNav extends Component {
  //创建一级菜单
  createCmenus = (menu) => {
    return (
      <Menu.Item key={menu.key}>
        <Link to={menu.key}>
          <Icon type={menu.icon} />
          <span>{menu.title}</span>
        </Link>
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

    //或者说获取当前组件相对应的路径
    //用来装defaultSelectedKeys={[""]}中动态的值,如果要使用location对象,当前组件要么有location属性,要么当前的组件应该是一个路由组件
    //但是目前这个组件不是路由组件,所以需要引入withRouter让他变成路由组件
    const { pathname } = this.props.location
    return (
      <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline">
        {/* <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline"> */}
        {/* 在二级联动菜单中,点开二级菜单的默认选中是不一定的,所以[]内不能装固定的值,而是动态的值 */}
        {menus}
      </Menu>
    );
  }
}

export default LeftNav;
