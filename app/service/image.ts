/*
 * @Author: your name
 * @Date: 2021-09-19 11:57:42
 * @LastEditTime: 2021-09-19 17:19:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-poster-generator-server/app/service/image.ts
 */
import { Service } from 'egg';
import * as nodeHtmlToImage from 'node-html-to-image';
import * as fs from 'fs';
import * as path from 'path';

const getPath = (name: string) => path.join(__dirname, '../view', `${name}.ejs`);
const getTemplte = (name: string) => fs.readFileSync(getPath(name), 'utf-8');

/**
 * Test Service
 */
export default class Image extends Service {

  public async generatorImage(name = 'cjfff') {
    const html = await this.ctx.renderString(getTemplte('user'), { user: name }, {
      viewEngine: 'ejs',
    });

    const image = await (nodeHtmlToImage as any)({
      html,
    });

    return image;
  }
}
