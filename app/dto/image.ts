/*
 * @Author: your name
 * @Date: 2021-09-21 21:17:32
 * @LastEditTime: 2021-09-21 21:19:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-poster-generator-server/app/dto/image.ts
 */
import { ApiProperty } from '@chenxxx/egg-swagger-decorator';

export class ImageDto {
  @ApiProperty({
    type: 'string',
  })
  name: string;
}
