import { useTranslations } from 'next-intl'
import { Section } from '@/shared/ui/section'
import { SplitHeading } from '@/shared/ui/split-heading'

export function AboutSection() {
	const t = useTranslations('About')

	return (
		<Section id="about">
			<SplitHeading className="mb-8 text-4xl font-semibold tracking-tight sm:text-5xl">
				{t('title')}
			</SplitHeading>
			<p className="max-w-2xl text-xl leading-relaxed text-muted-foreground">
				{t('text')}
			</p>
		</Section>
	)
}
