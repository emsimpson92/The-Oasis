import { useEffect } from 'react';

function setMetaTag(nameOrProperty, value, isProperty = false) {
  if (!value) return;
  const attr = isProperty ? 'property' : 'name';
  const selector = isProperty ? `[property="${nameOrProperty}"]` : `[name="${nameOrProperty}"]`;
  let el = document.querySelector(`head ${selector}`);
  if (!el) {
    el = document.createElement('meta');
    if (isProperty) el.setAttribute('property', nameOrProperty);
    else el.setAttribute('name', nameOrProperty);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

export default function useMeta({ title, description, url, image, canonical }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMetaTag('description', description);
    if (url) setMetaTag('og:url', url, true);
    if (title) setMetaTag('og:title', title, true);
    if (description) setMetaTag('og:description', description, true);
    if (image) setMetaTag('og:image', image, true);
    if (canonical) {
      let link = document.querySelector('head link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, url, image, canonical]);
}
