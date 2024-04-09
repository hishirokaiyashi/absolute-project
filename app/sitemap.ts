import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const _url = process.env.NEXT_SITE_URL
    ? process.env.NEXT_SITE_URL
    : 'http://localhost:3000';

  // const _sitemaps = [
  //   {
  //     url: _url,
  //     lastModified: new Date()
  //   },
  // ];

  let _sitemaps: MetadataRoute.Sitemap = [];

  return _sitemaps;
}
