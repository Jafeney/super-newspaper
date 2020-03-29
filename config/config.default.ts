import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

interface BizConfig {
  sourceUrl: string;
  news: {
    pageSize: number;
    serverUrl: string;
  };
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585140452523_7957';

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;
  config.news = {
    pageSize: 30,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  // override config from framework / plugin
  config.keys = appInfo.name + '123456';

  config.view = {
    defaultExtension: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // add your egg config in here
  config.middleware = [
    'robot',
  ];

  // 添加防爬虫配置
  config.robot = {
    ua: [
      /Baiduspider/i, // 百度搜索引擎的ua
    ],
  };

  // 设置静态文件
  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
  };

  // sequelize配置
  config.sequelize = {
    dialect: 'mysql',
    host: 'rm-bp103ftn522j8te35jo.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'visitor',
    password: '123456ok',
    database: 'super-newspaper',
  };

  // the return config will combines to EggAppConfig
  return config;
};
