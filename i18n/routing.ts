import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
	locales: ['ru', 'kk', 'en'],
	defaultLocale: 'ru',
	localePrefix: 'always'
})

export type Locale = (typeof routing.locales)[number]

// Подписи для переключателя языка.
export const LOCALE_LABELS: Record<Locale, string> = {
	ru: 'РУС',
	kk: 'ҚАЗ',
	en: 'ENG'
}
