const express = require('express');
const Products = require('../models/products');
const { pageFilter } = require('../utils');

const router = new express.Router();

// 添加产品
router.post('/api/product/add', (req, res) => {
  const product = req.body;

  Products.create(product)
    .then(product => {
      res.json({status: 0, data: product})
    })
    .catch(error => {
      res.json({status: 1, msg: '添加产品失败'});
    })
});

// 获取产品分页列表
router.get('/api/product/list', (req, res) => {
  const { pageNum, pageSize } = req.query;

  Products.find({})
    .then(products => {
      res.json({status: 0, data: pageFilter(products, pageNum, pageSize)})
    })
    .catch(error => {
      res.json({status: 1, msg: '获取商品列表失败'});
    })
});

// 搜索产品列表
router.get('/api/product/search', (req, res) => {
  const { pageNum, pageSize, productName, productDesc } = req.query;

  let condition = {};

  if (productName) {
    condition = {name: new RegExp(`^.*${productName}.*$`)}
  } else if (productDesc) {
    condition = {desc: new RegExp(`^.*${productDesc}.*$`)}
  }

  Products.find(condition)
    .then(products => {
      res.json({status: 0, data: pageFilter(products, pageNum, pageSize)});
    })
    .catch(error => {
      res.json({status: 1, msg: '搜索商品列表失败'});
    })
});

// 更新产品
router.post('/api/product/update', (req, res) => {
  const product = req.body;

  Products.findOneAndUpdate({_id: product.productId}, product)
    .then(oldProduct => {
      res.json({status: 0, data: product})
    })
    .catch(error => {
      res.json({status: 1, msg: '更新商品失败'})
    })
});

// 更新产品状态(上架/下架)
router.post('/api/product/update/status', (req, res) => {
  const { productId, status } = req.body;

  Products.findOneAndUpdate({_id: productId}, {status})
    .then(oldProduct => {
      res.json({status: 0, data: {}})
    })
    .catch(error => {
      res.json({status: 1, msg: '更新产品状态失败'})
    })
});

// 删除产品
router.post('/api/product/delete', (req, res) => {
  const { productId } = req.body;

  Products.deleteOne({_id: productId})
    .then(oldProduct => {
      res.json({status: 0, data: {}})
    })
    .catch(error => {
      res.json({status: 1, msg: '删除产品失败'})
    })
});

module.exports = router;
