import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/shared/i18n'
import { AboutSection } from './AboutSection'
import { ContactSection } from './ContactSection'
import { Hero } from './Hero'
import { ProjectsSection } from './ProjectsSection'

export async function HomePage({ params }: PageProps<'/[locale]'>) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) notFound()
	setRequestLocale(locale)

	return (
		<>
			<Hero />
			<ProjectsSection />
			<AboutSection />
			<ContactSection />
		</>
	)
}
