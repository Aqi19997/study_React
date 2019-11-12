//包含了多个同步及异步的action的creator----包含了多个生产action对象的工厂函数
//引入action的type
import {SAVE_USER} from './action-types.js'
//保存用户信息和token
export const saveUser=(value)=>({type:SAVE_USER,data:value})