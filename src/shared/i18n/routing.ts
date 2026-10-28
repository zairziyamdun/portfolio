import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
	locales: ['ru', 'kk', 'en'],
	defaultLocale: 'ru',
	localePrefix: 'always'
})

export type Locale = (typeof routing.locales)[number]

// Текст на всех языках сайта: пропуск перевода ловит TypeScript.
export type Localized = Record<Locale, string>

// Подписи для переключателя языка.
export const LOCALE_LABELS: Record<Locale, string> = {
	ru: 'РУС',
	kk: 'ҚАЗ',
	en: 'ENG'
}
