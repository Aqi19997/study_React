const express = require('express');
const Roles = require('../models/roles');

const router = new express.Router();

// 添加角色
router.post('/api/role/add', (req, res) => {
  const { name } = req.body;

  Roles.create({name})
    .then(role => {
      res.json({status: 0, data: role});
    })
    .catch(error => {
      res.json({status: 1, msg: '添加角色失败'});
    })
});

// 获取角色列表
router.get('/api/role/get', (req, res) => {

  Roles.find()
    .then(roles => {
      res.json({status: 0, data: roles});
    })
    .catch(error => {
      res.json({status: 1, msg: '获取角色列表失败'});
    })
});

// 更新角色(设置权限)
router.post('/api/role/update', (req, res) => {
  const role = req.body;
  role.authTime = Date.now();

  Roles.findOneAndUpdate({_id: role.roleId}, role)
    .then(oldRole => {

      const newRole = {
        "menus": role.menus,
        "_id": role.roleId,
        "name": oldRole.name,
        "createTime": oldRole.createTime,
        "authTime": role.authTime,
        "authName": role.authName
      };

      res.json({status: 0, data: newRole});
    })
    .catch(error => {
      res.json({status: 1, msg: '更新角色权限失败'});
    })
});

// 删除角色列表
router.post('/api/role/delete', (req, res) => {
  const { roleId } = req.body;

  Roles.deleteOne({_id: roleId})
    .then(roles => {
      res.json({status: 0, data: {}});
    })
    .catch(error => {
      res.json({status: 1, msg: '删除角色失败'});
    })
});

module.exports = router;