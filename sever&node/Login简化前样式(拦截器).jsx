import React, { Component } from "react";
//引入less
import "./Login.less";
//引入axios
import axios from 'axios'
//引入LOGO图
import logo from "../../assets/images/logo.png";
//按需引入antd
import { Form, Icon, Input, Button, message } from "antd";
//引入connect
import { connect } from 'react-redux'
//引入action
import { saveUser } from '../../redux/action-creators.js'

const Item = Form.Item;


//装饰器的使用
@connect(null, {
  saveUser
})
@Form.create()
class Login extends Component {
  //阻止默认事件
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        message.success('表单验证成功')
        //表单验证成功时获取账号密码
        const { username, password } = values

        //发送异步
        axios.post(`http://localhost:3000/api/login`, { username, password })
          .then(({ data }) => {
            if (data.status === 0) {
              //请求成功,提示信息:登录成功
              message.success('登录成功')
              //console.log(data) 
              //保存用户信息
              this.props.saveUser(data.data)
              //跳转界面
            } else {
              //验证失败
              message.error(data.msg)
              this.props.form.resetFields(['password'])
            }
          })
          .catch((error) => {
            message.error('请求失败' + error)
          })


        //发送异步请求,获取用户信息保存

      } else {
        message.error('表单验证失败')
      }
    });
  };

  validator = (rule, value, callback) => {
    //表单密码的校验
    if (!value) {
      callback('请输入密码')
    } else if (value.length < 4) {
      callback('必须大于三位')
    } else if (value.length >= 12) {
      callback('必须小于12位')
    } else if (!/^[0-9a-zA-Z_]+$/.test(value)) {
      callback('必须是数字字母下划线')
    } else {
      callback()
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login_header">
          <img src={logo} alt={logo} />
          <h1>React项目:后台管理系统</h1>
        </div>
        <div className="login_content">
          <h2>用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              {getFieldDecorator("username", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "必须输入用户名"
                  },
                  { min: 4, message: "必须大于4位" },
                  { max: 12, message: "必须小于12位" },
                  {
                    pattern: /^[a-zA-Z0-9_]+$/,
                    message: "必须是英文/数字/下划线组成"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="用户名"
                />
              )}
            </Item>
            <Item>
              {
                getFieldDecorator("password", {
                  initialValue: "",//初始化密码
                  rules: [
                    { validator: this.validator }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="请输入用户密码"
                  />
                )
              }

            </Item>
            <Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    );
  }
}

//export default Form.create()(Login);

// export default connect (状态数据,action)(Form.create()(Login))

export default Login;