//引入两个路由组件
// import Login from "../containers/Login/Login.jsx";
import Admin from "../components/Admin/Admin.jsx";


export default [
  // {
  //   exact:true,
  //   path:'/login',
  //   component:Login
  // },因为app.jsx已经应用了login,那么就不在routes再次引用
  {
    exact:true,
    path:'/',
    component:Admin
  }
]