import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://philjoseph-orlina.web.app'

  // Standard static pages
  const routes = [
    '',
    '/about',
    '/posters',
    '/logos',
    '/obs-overlays',
    '/web-ui',
    '/video',
    '/websites',
    '/virtual-assistance',
    '/blog',
    '/affiliates',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Blog post pages
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...blogRoutes]
}
