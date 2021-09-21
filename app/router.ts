/*
 * @Author: your name
 * @Date: 2021-09-19 11:46:27
 * @LastEditTime: 2021-09-21 20:55:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-poster-generator-server/app/router.ts
 */
process.setMaxListeners(0);

import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/generator-image', controller.image.generatorImage);
};
