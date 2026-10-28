'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { LOCALE_LABELS, routing } from '@/i18n/routing'
import { cn } from '@/shared/lib/cn'

export function LocaleSwitcher({ className }: { className?: string }) {
	const t = useTranslations('Nav')
	const current = useLocale()
	const pathname = usePathname()

	return (
		<nav
			aria-label={t('language')}
			className={cn('flex gap-1 text-sm', className)}
		>
			{routing.locales.map(locale => (
				<Link
					key={locale}
					href={pathname}
					locale={locale}
					hrefLang={locale}
					aria-current={locale === current ? 'true' : undefined}
					className={cn(
						'rounded-md px-2 py-1 text-muted-foreground transition-colors hover:text-foreground',
						locale === current && 'text-foreground'
					)}
				>
					{LOCALE_LABELS[locale]}
				</Link>
			))}
		</nav>
	)
}
