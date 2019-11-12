/*
  权限token验证中间件
 */
const jwt = require('jsonwebtoken');
const { PRIVATE_KEY, UN_CHECK_PATH } = require('../config');

module.exports = function (req, res, next) {
  const url = req.url;

  // 如果是登录请求，不进行验证~
  // 此处可以配置白名单
  if (UN_CHECK_PATH.indexOf(url) === 0) {
    next();
    return;
  }

  // 其他所有请求都要验证token
  let token = req.headers['authorization'];

  // 没有token
  if (!token) {
    return res.status(401).json({
      status: 1,
      msg: '你没有登录，需要登录才能使用'
    })
  }

  // 一开始值： Bearer token  --> 截取后面token
  token = token.slice(7);

  // 有token进行校验
  jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
    if (err) {
      // 验证失败~
      console.log('token验证失败', err);

      return res.status(407).json({
        status: 1,
        msg: 'token过期或失效'
      })
    } else {
      // 验证通过，添加到req上
      req.user = decoded;

      return next();
    }
  })

};