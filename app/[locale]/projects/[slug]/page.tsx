import { ArrowLeftIcon, ArrowUpRightIcon } from 'lucide-react'
import type { Metadata } from 'next'
import { hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { getProject, projects } from '@/content/projects'
import { Link } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { SplitHeading } from '@/shared/components/elements/SplitHeading'
import { buttonVariants } from '@/shared/components/ui/button'
import { alternates } from '@/shared/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
	return projects.map(project => ({ slug: project.slug }))
}

export async function generateMetadata({
	params
}: PageProps<'/[locale]/projects/[slug]'>): Promise<Metadata> {
	const { locale, slug } = await params
	const project = getProject(slug)
	if (!project || !hasLocale(routing.locales, locale)) return {}

	return {
		title: project.title[locale],
		description: project.summary[locale],
		alternates: alternates(locale, `/projects/${slug}`)
	}
}

export default async function ProjectPage({
	params
}: PageProps<'/[locale]/projects/[slug]'>) {
	const { locale, slug } = await params
	const project = getProject(slug)
	if (!project || !hasLocale(routing.locales, locale)) notFound()
	setRequestLocale(locale)
	const t = await getTranslations('Projects')

	const facts = [
		{ label: t('year'), value: String(project.year) },
		{ label: t('role'), value: project.role[locale] },
		{ label: t('stack'), value: project.stack.join(', ') }
	]

	return (
		<article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
			<Link
				href={{ pathname: '/', hash: 'projects' }}
				className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
			>
				<ArrowLeftIcon className="size-4" />
				{t('back')}
			</Link>

			<SplitHeading
				as="h1"
				className="mb-6 text-5xl font-semibold tracking-tight sm:text-7xl"
			>
				{project.title[locale]}
			</SplitHeading>
			<p className="mb-12 text-xl text-muted-foreground">
				{project.summary[locale]}
			</p>

			<dl className="mb-12 grid gap-6 border-y py-6 sm:grid-cols-3">
				{facts.map(fact => (
					<div key={fact.label}>
						<dt className="font-mono text-xs text-muted-foreground uppercase">
							{fact.label}
						</dt>
						<dd className="mt-1">{fact.value}</dd>
					</div>
				))}
			</dl>

			<p className="mb-12 text-lg leading-relaxed">
				{project.description[locale]}
			</p>

			<div className="flex flex-wrap gap-3">
				{project.url && (
					<a
						href={project.url}
						target="_blank"
						rel="noreferrer"
						className={buttonVariants({ size: 'lg' })}
					>
						{t('visit')}
						<ArrowUpRightIcon data-icon="inline-end" />
					</a>
				)}
				{project.repo && (
					<a
						href={project.repo}
						target="_blank"
						rel="noreferrer"
						className={buttonVariants({ size: 'lg', variant: 'outline' })}
					>
						{t('source')}
					</a>
				)}
			</div>
		</article>
	)
}
