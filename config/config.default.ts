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
  config.middleware = [];

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
  };

  // the return config will combines to EggAppConfig
  return config;
};
