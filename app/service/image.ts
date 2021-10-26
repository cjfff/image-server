/*
 * @Author: your name
 * @Date: 2021-09-19 11:57:42
 * @LastEditTime: 2021-09-21 20:23:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-poster-generator-server/app/service/image.ts
 */
import { Service } from 'egg';
import nodeHtmlToPdfOrImage from '../util/pdf';

export default class Image extends Service {

  public async generatorImage(name) {
    const html = await this.ctx.renderView('user.ejs', { user: name }, {
      viewEngine: 'ejs',
    });

    const image = await (nodeHtmlToPdfOrImage as any)({
      html,
      selector: '.poster',
    });

    return image;
  }

  public async generatorWaybill(length = 1) {
    const realLength = typeof length === 'number' && length > 0 ? length : 1;

    const html = await this.ctx.renderView('waybill.ejs', { waybills: Array.from({ length: realLength }, (_, i) => i) }, {
      viewEngine: 'ejs',
    });

    const pdf = await (nodeHtmlToPdfOrImage as any)({
      html,
      pdf: true,
      selector: '#app',
      puppeteerArgs: {
        fullPage: true,
      },
    });

    return pdf;
  }
}
