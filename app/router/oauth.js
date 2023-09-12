'use strict';

module.exports = (app) => {
  const subRouter = app.router.namespace('/sub', app.middleware.uppercase());
  subRouter.get('/news/list', app.middleware.gzip({ threshold: 2000 }), app.controller.home.newss);
}
