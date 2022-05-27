import { Log } from './log';
import { IPage } from './types';
import { changefreqList } from './utils';

export function validatePage(page: IPage) {
  if (typeof page.path === 'undefined') {
    Log.error(
      `Field "path" is required in "page" object. Got: ${JSON.stringify(page)}`,
    );
  }

  if (page.priority && (page.priority > 1 || page.priority < 0)) {
    Log.error(
      `Field "priority" is invalid. Got: ${page.priority}. Expected: from 1 to 0`,
    );
  }

  if (page.changefreq && !changefreqList.includes(page.changefreq)) {
    Log.error(
      `Field "changefreq" is invalid. Got: ${page.changefreq}. Expected: 'never' | 'yearly' | 'monthly' | 'weekly' | 'daily' | 'hourly' | 'always'`,
    );
  }
}
