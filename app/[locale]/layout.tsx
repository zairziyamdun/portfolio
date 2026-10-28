import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { site } from '@/content/site'
import { routing } from '@/i18n/routing'
import { Footer } from '@/shared/components/elements/Footer'
import { Header } from '@/shared/components/elements/Header'
import { SmoothScroll } from '@/shared/components/providers/SmoothScroll'
import { cn } from '@/shared/lib/cn'
import { alternates } from '@/shared/lib/seo'
import '../globals.css'

// cyrillic-ext нужен для казахских букв (ә, ғ, қ, ң, ө, ұ, ү, һ, і).
const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin', 'cyrillic', 'cyrillic-ext']
})

const mono = JetBrains_Mono({
	variable: '--font-mono-jb',
	subsets: ['latin', 'cyrillic']
})

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }))
}

export async function generateMetadata({
	params
}: LayoutProps<'/[locale]'>): Promise<Metadata> {
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

export default async function LocaleLayout({
	children,
	params
}: LayoutProps<'/[locale]'>) {
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
