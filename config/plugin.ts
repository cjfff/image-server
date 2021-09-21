/*
 * @Author: your name
 * @Date: 2021-09-19 11:46:27
 * @LastEditTime: 2021-09-19 11:58:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /egg-poster-generator-server/config/plugin.ts
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  ej: {
    enable: true,
    package: 'egg-view-ejs',
  },
};

export default plugin;
