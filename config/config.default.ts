/*
 * @Author: your name
 * @Date: 2021-09-19 11:46:27
 * @LastEditTime: 2021-09-19 11:59:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /egg-poster-generator-server/config/config.default.ts
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1632023182120_7384';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.mapping = {
    '.ejs': 'ejs',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
