'use strict';

class AppBootHook {
  constructor(app) {
    this.app = app;

    // 设置全局数据，一般给模板渲染所使用
    app.locals = { globals: 'lebron' };
  }

  configWillLoad() {
    require('module-alias/register');
  }

  configDidLoad() {
    // Config, plugin files have been loaded.
    // 配置文件加载完成
  }

  async didLoad() {
    // All files have loaded, start plugin here.
    // 所有文件都已加载，准备启动插件
  }

  async willReady() {

  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
  }

  async serverDidReady() {

  }

  async beforeClose() {

  }
}

module.exports = AppBootHook;
