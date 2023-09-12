'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async newss() {
    console.log('哈哈哈');
    this.ctx.body = '我是新闻页面';
  }
}

module.exports = HomeController;
