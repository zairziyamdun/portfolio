import type { MetadataRoute } from 'next'
import { projects } from '@/content/projects'
import { site } from '@/content/site'
import { getPathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
	const hrefs = ['/', ...projects.map(project => `/projects/${project.slug}`)]

	return hrefs.flatMap(href =>
		routing.locales.map(locale => ({
			url: site.url + getPathname({ locale, href }),
			alternates: {
				languages: Object.fromEntries(
					routing.locales.map(l => [
						l,
						site.url + getPathname({ locale: l, href })
					])
				)
			}
		}))
	)
}
