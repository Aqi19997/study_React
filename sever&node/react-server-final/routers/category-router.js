const express = require('express');
const Categories = require('../models/categories');

const router = new express.Router();

// 添加分类
router.post('/api/category/add', (req, res) => {
  const { categoryName } = req.body;
  
  Categories.create({name: categoryName})
    .then(category => {
      res.json({status: 0, data: category});
    })
    .catch(error => {
      res.json({status: 1, msg: '添加分类失败'});
    })
});

// 获取分类列表
router.get('/api/category/get', (req, res) => {
  Categories.find({})
    .then(categories => {
      res.json({status: 0, data: categories});
    })
    .catch(error => {
      res.json({status: 1, msg: '获取分类列表失败'});
    })
});

// 删除分类
router.post('/api/category/delete', (req, res) => {
  const { categoryId } = req.body;
  Categories.deleteOne({_id: categoryId})
    .then(() => {
      res.json({status: 0, data: categoryId});
    })
    .catch(error => {
      res.json({status: 1, msg: '删除分类失败'});
    })
});

// 更新分类名称
router.post('/api/category/update', (req, res) => {
  const { categoryId, categoryName } = req.body;
  Categories.findOneAndUpdate({_id: categoryId}, {name: categoryName})
    .then(oldCategory => {
      res.json({status: 0, data: {_id: categoryId, name: categoryName}});
    })
    .catch(error => {
      res.json({status: 1, msg: '更新分类名称失败'});
    })
});

module.exports = router;
