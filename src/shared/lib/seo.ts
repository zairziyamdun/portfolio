import type { Metadata } from 'next'
import { getPathname } from '@/shared/i18n/navigation'
import { routing, type Locale } from '@/shared/i18n/routing'

// canonical + hreflang для страницы во всех локалях.
export function alternates(
	locale: Locale,
	href: string
): Metadata['alternates'] {
	const languages = Object.fromEntries(
		routing.locales.map(l => [l, getPathname({ locale: l, href })])
	)

	return {
		canonical: getPathname({ locale, href }),
		languages: {
			...languages,
			'x-default': getPathname({ locale: routing.defaultLocale, href })
		}
	}
}
