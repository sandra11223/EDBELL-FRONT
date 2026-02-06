import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://edbelledusolutions.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/courses',
    '/universities',
    '/services',
    '/blog',
    '/contact',
    '/login',
  ]

  // Course pages
  const coursePages = [
    '/courses/bachelor-of-arts',
    '/courses/bachelor-of-commerce',
    '/courses/bachelor-of-business-administration',
    '/courses/master-of-arts',
    '/courses/master-of-commerce',
    '/courses/master-of-business-administration',
    '/courses/digital-marketing',
    '/courses/hospital-administration',
  ]

  // University pages
  const universityPages = [
    '/universities/ignou',
    '/universities/lpu',
    '/universities/amity-university',
    '/universities/manipal-university',
    '/universities/chandigarh-university',
  ]

  const allPages = [...staticPages, ...coursePages, ...universityPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : page.includes('/courses/') || page.includes('/universities/') ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : page === '/courses' || page === '/universities' ? 0.9 : page.includes('/courses/') || page.includes('/universities/') ? 0.8 : 0.7,
  }))
}