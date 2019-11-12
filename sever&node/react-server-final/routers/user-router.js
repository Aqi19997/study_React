const express = require('express');
const md5 = require('blueimp-md5');
const Users = require('../models/users');
const Roles = require('../models/roles');

const router = new express.Router();

// 添加用户
router.post('/api/user/add', async (req, res) => {
  // 读取请求参数数据
  const { username, password, email, phone, roleId } = req.body;
  // 处理: 判断用户是否已经存在, 如果存在, 返回提示错误的信息, 如果不存在, 保存
  // 查询(根据username)

  try {
    let user = await Users.findOne({username});

    if (user) {
      res.json({status: 1, msg: '此用户已存在'});
      return;
    }

    user = await Users.create({...req.body, password: md5(password)});

    res.json({
      status: 0,
      data: {
        username, email, phone, roleId, createTime: user.createTime, _id: user._id
      }
    });
  } catch (error) {

    res.json({status: 1, msg: '添加用户失败'});
  }

});

// 更新用户
router.post('/api/user/update', async (req, res) => {
  const user = req.body;

  try {
    await Users.findOneAndUpdate({username: user.username}, user);

    // 返回
    res.json({
      status: 0,
      data: {
        username: user.username,
      }
    })

  } catch (e) {
    res.json({status: 1, msg: '更新用户密码失败'});
  }
});

// 删除用户
router.post('/api/user/delete', (req, res) => {
  const { username } = req.body;

  Users.deleteOne({username: username})
    .then((doc) => {
      res.json({status: 0, data: {}})
    })
    .catch(() => {
      res.json({status: 1, msg: '删除用户失败'})
    })
});

// 获取所有用户列表
router.get('/api/user/get', (req, res) => {
  Users.find({username: {'$ne': 'admin'}})
    .then(users => {
      res.json({status: 0, data: users})
    })
    .catch(error => {
      res.json({status: 1, msg: '获取用户列表失败'})
    })
});

module.exports = router;