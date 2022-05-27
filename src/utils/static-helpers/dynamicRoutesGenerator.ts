import { ICategory } from '@/database/baseTypes';
import { IEspGuides } from '@/database/esp-guides/esp-guides.interface';

type CategoryPost = { category: ICategory; slug: string };
type ProviderPost = { provider: IEspGuides.Provider; slug: string };
type Category = { slug: string };
type Provider = { slug: string };
type Post = { slug: string };

const categoryRoute = <T extends Category>(
  collection: T[],
  collectionDir: string,
) => {
  return collection.map((category: T) => {
    return `/${collectionDir}/${category.slug}`;
  });
};

const providerRoute = <T extends Provider>(
  collection: T[],
  collectionDir: string,
) => {
  return collection.map((provider: T) => {
    return `/${collectionDir}/${provider.slug}`;
  });
};

const categoryPostRoute = <T extends CategoryPost>(
  collection: T[],
  collectionDir: string,
) => {
  return collection.map((post: T) => {
    return `/${collectionDir}/${post.category.slug}/${post.slug}`;
  });
};

const providerPostRoute = <T extends ProviderPost>(
  collection: T[],
  collectionDir: string,
) => {
  return collection.map((post: T) => {
    return `/${collectionDir}/${post.provider.slug}/${post.slug}`;
  });
};

const postRoute = <T extends Post>(collection: T[], collectionDir: string) => {
  return collection.map((post: T) => {
    return `/${collectionDir}/${post.slug}`;
  });
};

export const dynamicRoutesGenerator = {
  categoryRoute,
  providerRoute,
  categoryPostRoute,
  providerPostRoute,
  postRoute,
};
