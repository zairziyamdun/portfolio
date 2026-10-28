import { useTranslations } from 'next-intl'
import { site } from '@/shared/config'
import { Section } from '@/shared/ui/section'
import { SplitHeading } from '@/shared/ui/split-heading'

export function ContactSection() {
	const t = useTranslations('Contact')

	return (
		<Section id="contact">
			<SplitHeading className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
				{t('title')}
			</SplitHeading>
			<p className="mb-8 text-lg text-muted-foreground">{t('text')}</p>
			<a
				href={`mailto:${site.email}`}
				className="text-2xl font-medium underline decoration-accent underline-offset-8 transition-colors hover:text-accent sm:text-4xl"
			>
				{site.email}
			</a>
		</Section>
	)
}
