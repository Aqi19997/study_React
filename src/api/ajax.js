//调用二次封装的axios
import axios from 'axios'
//引入qs
import qs from 'qs'
//引入store
import store from '../redux/store.js'

//引入message
import {message}from 'antd'


//使用请求拦截器和响应拦截器

//1 把传入过来的参数,从json个是转urlencoding的方式(属性=值&属性=值)
//把token放在请求头中
//使用的是响应拦截器

//2 直接返回响应数据
//3 对错误进行统一的处理


//设计基本的地址路径
axios.defaults.baseURL = `http://localhost:3000/api`


//请求拦截器 ---要对请求做相应的操作
axios.interceptors.request.use((config) => {
  //获取config对象中data的参数
  let data = config.data
  config.data = qs.stringify(data)
  //先获取token----store中---redux---getState().user.token
  //判断token是否存在
  const token = store.getState().user.token
  if (token) {
    //token存放在了请求头的authorization----后台在获取请求头的时候,会从请求头的authorization中找,是否有token,如果有则对token进行解密
    config.authorization = token
  }
  return config
})

//响应拦截器
axios.interceptors.response.use((response)=>{
  return response.data
},(error)=>{
  // 大量的错误要进行处理
  message.error('系统错误,请联系管理员'+error)
  return new Promise(()=>{})
})

//暴露axios对象
export default axios