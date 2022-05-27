import { MetaInfo } from 'vue-meta';
import { SITE_URL } from '@/utils/constants';

export interface PageHeadInterface {
  title: string;
  route: string;
  url?: string;
  description: string;
  image: string;
}

export function pageHead({
  title,
  route,
  url,
  description,
  image,
}: PageHeadInterface): MetaInfo {
  return {
    title,
    link: [
      { rel: 'canonical', href: SITE_URL + route },
      { rel: 'icon', type: 'image/svg+xml', href: '/logo_new.svg' },
    ],

    meta: [
      {
        name: 'description',
        content: description,
        hid: 'description',
      },
      {
        property: 'og:url',
        content: url || SITE_URL + route,
        hid: 'og:url',
      },
      {
        property: 'og:type',
        content: 'website',
        hid: 'og:type',
      },
      {
        property: 'og:title',
        content: title,
        hid: 'og:title',
      },
      {
        property: 'og:description',
        content: description,
        hid: 'og:description',
      },
      {
        property: 'og:image',
        content: image,
        hid: 'og:image',
      },
    ],
  };
}
