/*
 * @Author: your name
 * @Date: 2021-09-19 11:54:36
 * @LastEditTime: 2021-09-19 17:18:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-poster-generator-server/app/controller/image.ts
 */
import { Controller } from 'egg';

export default class ImageController extends Controller {
  public async generatorImage() {
    const { ctx } = this;
    const image = await ctx.service.image.generatorImage(ctx.request.query.name);

    ctx.headers['content-type'] = 'image/png';
    ctx.body = image;
  }
}
