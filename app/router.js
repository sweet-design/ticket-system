'use strict';

module.exports = app => {
  const { router, controller } = app;

  // 此方式：在指定的路由中使用指定中间件
  // const gzip = app.middleware.gzip({ threshold: 2000 });

  router.resources('topics', '/topics', controller.topics);

  router.get('/', controller.home.index);
};
