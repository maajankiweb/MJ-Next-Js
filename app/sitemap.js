export const dynamic = 'force-static';

export default function sitemap() {
  return [
    { url: 'https://mjbytech.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
  ];
}
