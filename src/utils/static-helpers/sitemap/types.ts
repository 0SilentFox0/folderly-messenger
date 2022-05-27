export type IPage = {
  path: string | URL;
  changefreq?:
    | 'never'
    | 'yearly'
    | 'monthly'
    | 'weekly'
    | 'daily'
    | 'hourly'
    | 'always';
  priority?: number;
  lastmod?: Date | number | string;
};

export interface IGenerate extends IBuildSitemap {
  outputDir: string;
}

export interface IBuildSitemap {
  domain: string;
  pages: IPage[];
  trailingSlash?: boolean;
}

export interface IGenerateMultiple {
  outputDir: string;
  domain: string;
  sections: {
    name: string;
    pages: IPage[];
    lastmod?: Date | number | string;
  }[];
}
