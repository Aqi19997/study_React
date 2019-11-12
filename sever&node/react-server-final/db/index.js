const mongoose = require('mongoose');
const { DB_CONFIG } = require('../config');

mongoose.connect(`mongodb://${DB_CONFIG.host}:${DB_CONFIG.port}/react_admin_db`, { useNewUrlParser: true, useCreateIndex: true });

mongoose.connection.once('open', (err) => {
  if (err) {
    console.log('数据库连接失败~', err);
  } else {
    console.log('数据库连接成功~');
  }
});