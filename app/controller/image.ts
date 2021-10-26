/*
 * @Author: your name
 * @Date: 2021-09-19 11:54:36
 * @LastEditTime: 2021-09-21 21:28:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-poster-generator-server/app/controller/image.ts
 */
import { Controller } from 'egg';
import {
  query,
  request,
  responses,
  tags,
} from '@chenxxx/egg-swagger-decorator';
import * as DTO from '../dto/image';

const tag = tags([ 'image' ]);

export default class ImageController extends Controller {
  @tag
  @request('get', '/generator-image')
  @responses()
  @query(DTO.ImageDto)
  public async generatorImage() {
    const { ctx } = this;
    const { name = 'cjfff' } = ctx.request.query;
    const image = await ctx.service.image.generatorImage(name);

    ctx.set('Content-type', 'image/png');
    ctx.set('Content-disposition', `attachment; filename=${name}.png`);
    ctx.body = image;
  }

  @tag
  @request('get', '/generator-waybill')
  @responses()
  public async generatorWaybill() {
    const { ctx } = this;
    const { length = 1 } = ctx.request.query;
    const image = await ctx.service.image.generatorWaybill(Number(length));

    ctx.set('Content-type', 'application/pdf');
    ctx.set('Content-disposition', `attachment; filename=${Date.now()}.pdf`);
    ctx.body = image;
  }

  @tag
  @request('get', '/generator-waybill-html')
  @responses()
  public async generatorWaybillHtml() {
    const { ctx } = this;
    const { length = 1 } = ctx.request.query;

    await ctx.render(
      'waybill.ejs',
      {
        waybills: Array.from({ length: Number(length) }, (_, i) => i),
      },
      {
        viewEngine: 'ejs',
      },
    );
  }
}
