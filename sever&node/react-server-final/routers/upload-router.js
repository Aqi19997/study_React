/*
处理文件上传的路由
 */
const express = require('express');

const multer = require('multer');
const { resolve } = require('path');
const fs = require('fs');

const { SERVER_CONFIG } = require('../config');
const Products = require('../models/products');

const dirPath = resolve(__dirname, '..', 'public/upload');

const router = new express.Router();

const storage = multer.diskStorage({
  // destination: 'upload', //string时,服务启动将会自动创建文件夹
  destination: function (req, file, cb) { //函数需手动创建文件夹
    // console.log('destination()', file)
    if (!fs.existsSync(dirPath)) {
      fs.mkdir(dirPath, function (err) {
        if (err) {
          console.log(err)
        } else {
          cb(null, dirPath)
        }
      })
    } else {
      cb(null, dirPath)
    }
  },
  filename: function (req, file, cb) {
    // console.log('filename()', file)
    var ext = path.extname(file.originalname)
    cb(null, file.fieldname + '-' + Date.now() + ext)
  }
});
const upload = multer({storage});
const uploadSingle = upload.single('image');

// 上传图片
router.post('/api/image/upload', (req, res) => {
  uploadSingle(req, res, async function (err) { //错误处理
    if (err) {
      return res.send({
        status: 1,
        msg: '上传文件失败'
      })
    }

    const file = req.file;
    const { productId } = req.body;

    if (!productId) {
      return res.send({
        status: 1,
        msg: '没有id, 上传图片失败'
      })
    }

    let product = await Products.findOne({_id: productId});
    product.images = [...product.images, file.filename];
    await product.save();

    res.send({
      status: 0,
      data: {
        name: file.filename,
        url: `http://${SERVER_CONFIG.host}:${SERVER_CONFIG.port}/upload/` + file.filename
      }
    })

  })
});

// 删除图片
router.post('/api/image/delete', (req, res) => {

  const { name, productId } = req.body;
  const filepath = resolve(dirPath, name);

  fs.unlink(filepath, async (err) => {
    if (err) {
      return res.send({
        status: 1,
        msg: '删除文件失败'
      })
    }

    let product = await Products.findOne({_id: productId});
    product.imgs = product.imgs.filter(img => img !== name);
    const result = await product.save();

    res.send({
      status: 0,
      data: {
        name: result.filename
      }
    })
  })
});

module.exports = router;