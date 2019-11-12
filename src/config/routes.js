//引入两个路由组件
import Login from "../containers/Login/Login.jsx";
import Admin from "../components/Admin/Admin.jsx";


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