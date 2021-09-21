/*
 * @Author: your name
 * @Date: 2021-09-19 11:57:42
 * @LastEditTime: 2021-09-21 20:23:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-poster-generator-server/app/service/image.ts
 */
import { Service } from 'egg';
import * as nodeHtmlToImage from 'node-html-to-image';

export default class Image extends Service {

  public async generatorImage(name) {
    const html = await this.ctx.renderView('user.ejs', { user: name }, {
      viewEngine: 'ejs',
    });

    const image = await (nodeHtmlToImage as any)({
      html,
      selector: '.poster',
    });

    return image;
  }
}
