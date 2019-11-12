//包含了多个reducer 更新/修改状态数据的函数
//引入action的type
import {
  SAVE_USER
} from './action-types.js'
//引入redux
import {
  combineReducers
} from 'redux'
//引入storage.js文件
import {
  steItem,
  getItem,
  removeItem,
  setItem
} from '../utils/storage.js'
import {
  format
} from 'path'
const initUser = {
  user: getItem('user') || {},
  token: getItem('token') || ''
}

function user(prevState = initUser, action) {
  //判断type
  switch (action.type) {
    case SAVE_USER:
      //保存用户信息到redux中同时也要保存到localStorage
      //prevState.user=action.data.user
      setItem('user', action.data.user)

      //保存token串到redux中同时也要保存到localStorage
      //prevState.token=action.data.token
      setItem('token', action.data.token)

      return action.data

    default:
      return prevState
  }
}


export default combineReducers({
  user
})