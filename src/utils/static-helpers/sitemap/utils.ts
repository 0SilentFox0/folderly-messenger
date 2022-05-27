import fs from 'fs-extra';

export const changefreqList = [
  'never',
  'yearly',
  'monthly',
  'weekly',
  'daily',
  'hourly',
  'always',
];

export const saveFile = async (path: string, data: any) =>
  fs.outputFile(path, data);

export const getDate = (date?: Date | number | string) =>
  date ? new Date(date).toISOString() : new Date().toISOString();
