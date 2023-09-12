'use strict';

module.exports = {
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  cors: {
    enable: false,
    package: 'egg-cors',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  mysql: {
    enable: false,
    package: 'egg-mysql',
  },
  sequelize: {
    enable: false,
    package: 'egg-sequelize',
  },
  passport: {
    enable: false,
    package: 'egg-passport',
  },
  passportYuque: {
    enable: false,
    package: 'egg-passport-yuque',
  },
  oAuth2Server: {
    enable: false,
    package: 'egg-oauth2-server',
  },
  tracer: {
    enable: false,
    package: 'egg-tracer',
  },
  snowflake: {
    enable: false,
    package: 'egg-snowflake',
  },
  redis: {
    enable: false,
    package: 'egg-redis',
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
  swaggerdoc: {
    enable: false,
    package: 'egg-swagger-doc',
  },
};
