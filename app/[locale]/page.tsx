import { ArrowDownIcon, ArrowUpRightIcon } from 'lucide-react'
import { hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { projects } from '@/content/projects'
import { site } from '@/content/site'
import { Link } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { Reveal } from '@/shared/components/elements/Reveal'
import { SplitHeading } from '@/shared/components/elements/SplitHeading'
import { buttonVariants } from '@/shared/components/ui/button'

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) notFound()
	setRequestLocale(locale)
	const t = await getTranslations()

	return (
		<>
			<section className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-center gap-8 px-4 py-24 sm:px-6">
				<p className="font-mono text-sm text-accent">{t('Hero.eyebrow')}</p>
				<SplitHeading
					as="h1"
					className="max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl"
				>
					{t('Hero.title')}
				</SplitHeading>
				<p className="max-w-xl text-lg text-muted-foreground">
					{t('Hero.subtitle')}
				</p>
				<Link
					href={{ pathname: '/', hash: 'projects' }}
					className={buttonVariants({ size: 'lg', className: 'w-fit' })}
				>
					{t('Hero.cta')}
					<ArrowDownIcon data-icon="inline-end" />
				</Link>
			</section>

			<section
				id="projects"
				className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6"
			>
				<SplitHeading className="mb-12 text-4xl font-semibold tracking-tight sm:text-5xl">
					{t('Projects.title')}
				</SplitHeading>
				<Reveal className="grid gap-6 md:grid-cols-2">
					{projects.map(project => (
						<Link
							key={project.slug}
							href={`/projects/${project.slug}`}
							data-reveal
							className="group flex flex-col gap-4 rounded-2xl border bg-card p-6 transition-colors hover:border-accent"
						>
							<div className="flex items-start justify-between gap-4">
								<h3 className="text-2xl font-semibold">
									{project.title[locale]}
								</h3>
								<ArrowUpRightIcon
									aria-hidden
									className="size-6 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
								/>
							</div>
							<p className="text-muted-foreground">{project.summary[locale]}</p>
							<ul className="mt-auto flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
								<li>{project.year}</li>
								{project.stack.map(item => (
									<li key={item}>· {item}</li>
								))}
							</ul>
							<span className="sr-only">{t('Projects.open')}</span>
						</Link>
					))}
				</Reveal>
			</section>

			<section
				id="about"
				className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6"
			>
				<SplitHeading className="mb-8 text-4xl font-semibold tracking-tight sm:text-5xl">
					{t('About.title')}
				</SplitHeading>
				<p className="max-w-2xl text-xl leading-relaxed text-muted-foreground">
					{t('About.text')}
				</p>
			</section>

			<section
				id="contact"
				className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6"
			>
				<SplitHeading className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
					{t('Contact.title')}
				</SplitHeading>
				<p className="mb-8 text-lg text-muted-foreground">
					{t('Contact.text')}
				</p>
				<a
					href={`mailto:${site.email}`}
					className="text-2xl font-medium underline decoration-accent underline-offset-8 transition-colors hover:text-accent sm:text-4xl"
				>
					{site.email}
				</a>
			</section>
		</>
	)
}
