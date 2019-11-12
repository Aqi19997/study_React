import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


//Redirect
//withRouter函数,把组件变成路由组件
function WithCheckLogin(WrappedComponent) {
  //不是路由组件 所以没有location --->pathname,让它变成路由组件
  return connect((state) => ({ token: state.user.token }), null)(withRouter(
    class extends Component {
      //验证功能:
      //如果地址是/login,并且token存在,去'/'首页
      //如果地址不是login且token不存在,去login
      render() {
        
          
          //const { location: { pathname }, history, match } = this.props
          //const { pathname } = this.props.location;
          //从props中结构出location history match ,再从location中解构出pathname
          const {token,...rest} = this.props
          const { location:{pathname} } = rest
          if (pathname === '/login' && token) return <Redirect to='/' />
          if (pathname !== '/login' && !token) return <Redirect to='/login' />
          
          return <WrappedComponent  {...rest} />

          //return <WrappedComponent location={location} history={history} match={match} />;

        }
    }
  ))
}

export default WithCheckLogin;
