/*
用来定义路由的路由器模块
 */
const express = require('express');
const md5 = require('blueimp-md5');
const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../config');
const Users = require('../models/users');
const Roles = require('../models/roles');

const categoryRouter = require('./category-router');
const productRouter = require('./product-router');
const roleRouter = require('./role-router');
const userRouter = require('./user-router');
const uploadRouter = require('./upload-router');

// 得到路由器对象
const router = express.Router();
// 指定需要过滤的属性
// 登陆
router.post('/api/login', async (req, res) => {

  const { username, password } = req.body;

  const user = await Users.findOne({username, password: md5(password)}, {password: 0, __v: 0});

  if (!user) {
    return res.json({
      status: 1,
      msg: '用户名或密码不正确!'
    })
  }

  const role = await Roles.findById({_id: user.roleId});

  // 返回登陆成功信息(包含user)
  const userToken = {
    id: user._id
  };

  //签发token 指定过期时间 7 天
  const token = jwt.sign(userToken, PRIVATE_KEY, { expiresIn: '7 days' });

  res.json({
    status: 0,
    data: {
      token,
      user: {
        username: user.username,
        email: user.email,
        phone: user.phone,
        createTime: user.createTime,
        menus: role ? role.menus : []
      }
    }
  })
});

// 其他路由
router.use(userRouter);
router.use(categoryRouter);
router.use(productRouter);
router.use(roleRouter);
router.use(uploadRouter);

module.exports = router;