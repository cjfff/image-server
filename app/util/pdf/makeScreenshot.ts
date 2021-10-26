import { Page, PuppeteerLifeCycleEvent } from 'puppeteer';

interface IOptions {
  output?: string;
  type?: 'png' | 'jpeg';
  quality?: number;
  encoding?: string;
  content?: string;
  html: string;
  selector: string;
  transparent?: boolean;
  waitUntil: PuppeteerLifeCycleEvent;
  pdf?: boolean;
}

const defaultOptions = {
  transparent: false,
  waitUntil: 'networkidle0',
} as Partial<IOptions>;

export default async (page: Page, options?: Partial<IOptions>) => {
  const screeshotArgs = Object.assign(
    {},
    defaultOptions,
    options ?? {},
  ) as IOptions;

  const {
    type = 'png',
    quality,
    html,
    waitUntil,
    selector,
    output,
    transparent,
    encoding,
    pdf,
  } = screeshotArgs;

  if (type === 'jpeg') {
    screeshotArgs.quality = quality ? quality : 80;
  }

  await page.setContent(html, { waitUntil });

  if (pdf) {
    return page.pdf({
      ...(screeshotArgs as any),
    });
  }
  const element = await page.$(selector);
  if (!element) {
    throw Error('No element matches selector: ' + selector);
  }
  return element.screenshot({
    path: output,
    type,
    omitBackground: transparent,
    encoding,
    ...screeshotArgs,
  });

};
