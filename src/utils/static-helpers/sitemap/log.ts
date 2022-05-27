const info = (message: string) => console.log(`[Sitemap] ${message}`);
const error = (message: string) => {
  throw new Error(`[Sitemap] Error: ${message}`);
};

export const Log = {
  info,
  error,
};
