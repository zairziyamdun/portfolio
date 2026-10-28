import type { routing } from '@/shared/i18n/routing'
import type messages from '@/shared/i18n/messages/ru.json'

// Типизация ключей перевода: эталон — русский словарь.
declare module 'next-intl' {
	interface AppConfig {
		Locale: (typeof routing.locales)[number]
		Messages: typeof messages
	}
}
