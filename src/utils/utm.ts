import { LocationQuery } from 'vue-router';

type UtmParamsArray = [string, string][];

export const setUtmParamsToSession = (query: LocationQuery) => {
  const utmParams = Object.entries(query).filter(([key]) =>
    /^utm_.+/.test(key),
  );
  if (utmParams.length) {
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
  }
};

export const getUtmParamsFromSession = () => {
  if (typeof window === 'undefined') {
    return;
  }
  const utmParams = sessionStorage.getItem('utm_params');
  if (!utmParams) return;

  const queryParams = new URLSearchParams(window.location.search);
  const utmParamsArray: UtmParamsArray = JSON.parse(utmParams);

  utmParamsArray.forEach(([key, value]) => {
    queryParams.set(key, value);
  });

  history.replaceState(null, '', '?' + queryParams.toString());
};

export const getUtm = () => {
  if (typeof window === 'undefined') {
    return '';
  }
  return '?' + window?.location.search.replace('?', '&');
};
