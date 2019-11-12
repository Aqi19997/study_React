// 是接口文件,包含了多个封装的接口
// 调用二次封装的axios
import ajax from './ajax.js'

//封装接口
export const reqLogin=(username,password)=>ajax({
  method:'POST',
  url:'/login',
  data:{
    username,
    password
  }
})

//高复用