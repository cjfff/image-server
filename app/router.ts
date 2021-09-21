/*
 * @Author: your name
 * @Date: 2021-09-19 11:46:27
 * @LastEditTime: 2021-09-21 21:24:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-poster-generator-server/app/router.ts
 */
import 'reflect-metadata';
import { wrapper } from '@chenxxx/egg-swagger-decorator';

process.setMaxListeners(0);

import { Application } from 'egg';

export default (app: Application) => {
  // const { controller, router } = app;

  // router.get('/generator-image', controller.image.generatorImage);

  wrapper(app, {
    title: 'image-server',
    version: 'v1.0.0',
    prefix: '/image-server/api/v1',
    description: 'image-server',
  });
};
