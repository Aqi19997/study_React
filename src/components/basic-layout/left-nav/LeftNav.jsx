import React, { Component } from "react";
import { Menu, Icon } from "antd";
//引入菜单数据
import menus from "../../../config/menus.js";
import { withRouter, Link } from 'react-router-dom'
//引入国际化包
//引入实现国际化高阶组件及包
import { withTranslation  } from 'react-i18next';

const { SubMenu } = Menu;

@withTranslation()
@withRouter
class LeftNav extends Component {
  //创建一级菜单
  createCmenus = (menu) => {
    return (
      <Menu.Item key={menu.key}>
        <Link to={menu.key}>
          <Icon type={menu.icon} />
          <span>{this.props.t(menu.title)}</span>
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
                <span>{this.props.t(menu.title)}</span>
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

  //根据当前路径,获取这个二级菜单嗦在的一级菜单的key
  getOpenKey = (pathname) => {
    for (let i = 0; i < menus.length; i++) {
      const menu = menus[i]
      //判断当前这个菜单有没有children
      if (menu.children) {
        //说明此时这个menu就是一个有二级菜单的一级菜单
        for (let j = 0; j < menu.children.length; j++) {
          //cMenu是这个一级菜单中所有二级对象{key:'路径',icon,title}
          const cMenu = menu.children[j];
          if (cMenu.Key === pathname) {
            //获取该二级菜单一级菜单的key
            return menu.key
          }

        }
      }
    }
  }
  render() {
    //调用方法显示菜单
    const menus = this.createMenus();

    //或者说获取当前组件相对应的路径
    //用来装defaultSelectedKeys={[""]}中动态的值,如果要使用location对象,当前组件要么有location属性,要么当前的组件应该是一个路由组件
    //但是目前这个组件不是路由组件,所以需要引入withRouter让他变成路由组件

    const { pathname } = this.props.location

    //defaultOpenKeys 设置默认的菜单被选中
    //如果二级菜单被选中了,相对应的一级菜单需要被展开,defaultOpenKeys=一级菜单的路径
    //每个标签中的key中存储的都是路径
    //选中的是二级菜单,地址栏中的路径应该和当前你选中的二级菜单路径如果一致,得到的是这个二级菜单对应的一级菜单的key
    //defaultOpenKeys=一级菜单的key  那么一级菜单就会被展开
    const openKey = this.getOpenKey(pathname)
    return (
      <Menu theme="dark" defaultSelectedKeys={[pathname]} defaultOpenKeys={[openKey]} mode="inline">
        {/* <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline"> */}
        {/* 在二级联动菜单中,点开二级菜单的默认选中是不一定的,所以[]内不能装固定的值,而是动态的值 */}
        {menus}
      </Menu>
    );
  }
}

export default LeftNav;
