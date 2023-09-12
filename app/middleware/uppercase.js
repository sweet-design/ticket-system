'use strict';

module.exports = (options, app) => {
  return async function(ctx, next) {
    console.log('我是转换一下');
    await next();
  }
}
