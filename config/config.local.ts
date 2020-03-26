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
  return config;
};
