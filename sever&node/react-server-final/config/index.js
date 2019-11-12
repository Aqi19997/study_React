
// 区分开发/生产环境
const isDev = process.env.NODE_ENV === 'development';

let SERVER_CONFIG, DB_CONFIG;

// 不需要检查token的路径
const UN_CHECK_PATH = ['/api/login'];

// 由于目前没有上线服务器，所以地址一致
if (isDev) {
  // 服务器配置
  SERVER_CONFIG = {
    port: 5000,
  };

  // 数据库配置
  DB_CONFIG = {
    port: 27017,
    host: 'localhost'
  };

} else {

  // 服务器配置
  SERVER_CONFIG = {
    port: 5000,
  };

  // 数据库配置
  DB_CONFIG = {
    port: 27017,
    host: 'localhost'
  };

}

const PRIVATE_KEY = 'HELLO atguigu';

module.exports = {
  SERVER_CONFIG,
  DB_CONFIG,
  PRIVATE_KEY,
  UN_CHECK_PATH
};