import type { MetadataRoute } from 'next'
import { projectHref, projects } from '@/entities/project'
import { site } from '@/shared/config'
import { getPathname, routing } from '@/shared/i18n'

export function sitemap(): MetadataRoute.Sitemap {
	const hrefs = ['/', ...projects.map(project => projectHref(project.slug))]
	const url = (locale: (typeof routing.locales)[number], href: string) =>
		site.url + getPathname({ locale, href })

	return hrefs.flatMap(href =>
		routing.locales.map(locale => ({
			url: url(locale, href),
			alternates: {
				languages: Object.fromEntries(
					routing.locales.map(l => [l, url(l, href)])
				)
			}
		}))
	)
}

export function robots(): MetadataRoute.Robots {
	return {
		rules: { userAgent: '*', allow: '/' },
		sitemap: `${site.url}/sitemap.xml`
	}
}
