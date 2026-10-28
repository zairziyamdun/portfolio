import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { site } from '@/shared/config'
import { routing } from '@/shared/i18n'
import { cn } from '@/shared/lib/cn'
import { alternates } from '@/shared/lib/seo'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { SmoothScroll } from '../scroll/SmoothScroll'
import { inter, mono } from '../styles/fonts'
import '../styles/globals.css'

type Props = LayoutProps<'/[locale]'>

export function generateLocaleParams() {
	return routing.locales.map(locale => ({ locale }))
}

export async function generateLocaleMetadata({
	params
}: Props): Promise<Metadata> {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) return {}
	const t = await getTranslations({ locale, namespace: 'Meta' })

	return {
		metadataBase: new URL(site.url),
		title: { default: t('title'), template: `%s — ${site.name}` },
		description: t('description'),
		alternates: alternates(locale, '/'),
		openGraph: { type: 'website', locale, siteName: site.name }
	}
}

export async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) notFound()
	setRequestLocale(locale)

	return (
		<html
			lang={locale}
			className={cn(inter.variable, mono.variable)}
		>
			<body className="flex min-h-dvh flex-col">
				<NextIntlClientProvider>
					<SmoothScroll />
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
