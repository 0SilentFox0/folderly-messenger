export function isEmail(v = ''): boolean {
  return /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i.test(
    v,
  );
}

export function isObject(v: any) {
  const notNull = v !== null;

  const isObj = typeof v === 'object';

  const notArr = !Array.isArray(v);

  return notArr && notNull && isObj;
}

export const validation = {
  isEmail,
  notEmpty: (v: any[]) => v.length > 0,
};

export const formatDate = (initData: Date) => {
  const date = new Date(initData);

  return `${
    date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  }.${
    date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
  }.${date.getFullYear()}`;
};
