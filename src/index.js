//引入React
import React from "react";
//引入ReactDOM
import ReactDOM from "react-dom";
//引入store
import store from "./redux/store.js";
//引入react-redux
import { Provider } from "react-redux";
//引入App.jsx
import App from "./App.jsx";
//引入样式重置
import "./assets/css/reset.css";
//渲染组件
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
