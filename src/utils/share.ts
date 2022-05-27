export interface ShareInterface {
  url: string;
  title?: string;
}

export const getShareLink = {
  facebook({ url }: ShareInterface) {
    return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  },

  linkedin({ url, title }: ShareInterface) {
    return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&source=${url}`;
  },

  twitter({ url, title }: ShareInterface) {
    return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
  },
};

export function openLink(url = '') {
  if (!String(url).startsWith('http')) {
    window.location.href = url;

    return;
  }

  const w = 600;

  const h = 600;

  const width = innerWidth || document.body.clientWidth || screen.width;

  const height = innerHeight || document.body.clientHeight || screen.height;

  const dualScreenLeft = screenLeft !== undefined ? screenLeft : screenX;

  const dualScreenTop = screenTop !== undefined ? screenTop : screenY;

  const systemZoom = width / screen.availWidth;

  const left = (width - w) / 2 / systemZoom + dualScreenLeft;

  const top = (height - h) / 2 / systemZoom + dualScreenTop;

  const newWindow = window.open(
    url,
    '',
    `scrollbars=yes, width=${w / systemZoom}, height=${
      h / systemZoom
    }, top=${top}, left=${left}`,
  ) as Window;

  if (document.hasFocus()) newWindow.focus();
}
