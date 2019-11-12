/*
能操作categories集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose');

// 2.字义Schema(描述文档结构)
const categoriesSchema = new mongoose.Schema({
  name: {type: String, required: true},
});

// 3. 定义Model(与集合对应, 可以操作集合)
const Categories = mongoose.model('categories', categoriesSchema);

// 4. 向外暴露Model
module.exports = Categories;