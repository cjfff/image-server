/*
 * @Author: your name
 * @Date: 2021-09-19 11:46:27
 * @LastEditTime: 2021-09-19 11:57:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /egg-poster-generator-server/app/router.ts
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/generator-image', controller.image.generatorImage);
};
