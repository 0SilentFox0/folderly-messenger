import { ImageType } from '@/database/baseTypes';
import { SITE_URL_IMAGE } from './constants';

export interface GetImageParams {
  fallbackImage?: string;
  width?: number;
  height?: number;
}

export function getImage(
  originalImage: ImageType | string | undefined,
  { fallbackImage, width, height }: GetImageParams = {},
): string {
  if (originalImage) {
    let url = SITE_URL_IMAGE + (originalImage?.id || originalImage);
    if (width && height) {
      url +=
        `?width=${Math.round(width * 1.5)}` +
        `&height=${Math.round(height * 1.5)}` +
        `&fit=inside`;
    }
    return url;
  }
  return fallbackImage || '';
}
