import React, { Component } from 'react';
import { Layout, Button, Icon } from "antd";
//引入screenFull插件包
import screenfull from 'screenfull'
//引入实现国际化高阶组件及包
import { withTranslation ,getI18n } from 'react-i18next';
//引入connect高阶组件
import {connect} from 'react-redux'
//引入样式
import './HeaderMain.less'
const { Header } = Layout;
//当前组件的实例对象中的props中就有username属性({username:state.user.user.username})
@connect((state)=>{
  return{username:state.user.user.username}
},null)
@withTranslation()
class HeaderMain extends Component {

  state = {
    isScreen: true,
    // isEnglish: false//前期写法,后期会进行修改
    isEnglish: getI18n().language==='en'
  }

  //切换全屏效果-------------全屏
  changeScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
  //全屏Change时间的回调-------------全屏
  screenChange = () => {
    const isScreen = !this.state.isScreen
    //切换数据状态
    this.setState({
      isScreen
    })
  }

  //界面渲染完毕的声明周期函数-------------全屏
  componentDidMount() {
    screenfull.on('change', this.screenChange);
  }

  //组件卸载的生命周期函数-------------全屏
  componentWillUnmount() {
    screenfull.off('change', this.screenChange);
  }



  //国际化-------------国际化
  changeLanguage = () => {
    const isEnglish = !this.state.isEnglish
    //进行翻译
    this.props.i18n.changeLanguage(isEnglish?'en':'zh-CN')
    this.setState({
      isEnglish
    })
  }






  render() {
    const { isScreen , isEnglish } = this.state
    const {username} = this.props
    return (
      <Header style={{ background: "#fff", padding: 0 }} className="header-main">
        <div className="header-top">

          <Button size="small" onClick={this.changeScreen}><Icon type={
            isScreen ? 'fullscreen' : 'fullscreen-exit'} />
            {/* 判断全屏按钮 */}
          </Button>

          <Button size="small" className="header-english" onClick={this.changeLanguage}>
            {isEnglish?'中文':'English'}
            </Button>
          <span>欢迎,{username}</span>
          <Button type='link'>退出</Button>
        </div>
        <div className="header-connect">
          <div className="header-left">首页</div>
          <div className="header-right">2019年11月14日 11:10:18</div>
        </div>

      </Header>
    );
  }
}

export default HeaderMain;