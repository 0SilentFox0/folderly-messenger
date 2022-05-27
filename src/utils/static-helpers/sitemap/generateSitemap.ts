import { buildSitemap } from './buildSitemap';
import { Log } from './log';
import { IGenerate } from './types';
import { saveFile } from './utils';

export async function generateSitemap({ outputDir, pages, domain }: IGenerate) {
  try {
    const sitemap = buildSitemap({ pages, domain });

    const path = `${outputDir}/sitemap.xml`;

    await saveFile(path, sitemap);

    Log.info(`Generated ${path}`);
  } catch (err: any) {
    console.error(err.message);
  }
}
