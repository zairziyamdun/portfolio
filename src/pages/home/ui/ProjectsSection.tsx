import { useLocale, useTranslations } from 'next-intl'
import { ProjectCard, projects } from '@/entities/project'
import { Reveal } from '@/shared/ui/reveal'
import { Section } from '@/shared/ui/section'
import { SplitHeading } from '@/shared/ui/split-heading'

export function ProjectsSection() {
	const t = useTranslations('Projects')
	const locale = useLocale()

	return (
		<Section id="projects">
			<SplitHeading className="mb-12 text-4xl font-semibold tracking-tight sm:text-5xl">
				{t('title')}
			</SplitHeading>
			<Reveal className="grid gap-6 md:grid-cols-2">
				{projects.map(project => (
					<div
						key={project.slug}
						data-reveal
					>
						<ProjectCard
							project={project}
							locale={locale}
							openLabel={t('open')}
						/>
					</div>
				))}
			</Reveal>
		</Section>
	)
}
