//引入两个路由组件
import Login from "../pages/Login/Login.jsx";
import Admin from "../pages/Admin/Admin.jsx";


export default [
  {
    exact:true,
    path:'/login',
    component:Login
  },
  {
    exact:true,
    path:'/',
    component:Admin
  }
]