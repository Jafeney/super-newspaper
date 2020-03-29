import { EggAppConfig, PowerPartial } from 'egg';

interface BizConfig {
  sourceUrl: string;
  news: {
    pageSize: number;
    serverUrl: string;
  };
}

export default () => {
  const config: PowerPartial<EggAppConfig & BizConfig> = {};
  config.news = {
    pageSize: 20,
  };
  // sequelize配置
  config.sequelize = {
    dialect: 'mysql',
    host: 'rm-bp103ftn522j8te35jo.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'visitor',
    password: '123456ok',
    database: 'super-newspaper-test',
  };
  return config;
};
