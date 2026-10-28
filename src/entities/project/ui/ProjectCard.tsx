import { ArrowUpRightIcon } from 'lucide-react'
import { Link, type Locale } from '@/shared/i18n'
import { projectHref } from '../model/projects'
import type { Project } from '../model/types'

type Props = {
	project: Project
	locale: Locale
	openLabel: string
}

export function ProjectCard({ project, locale, openLabel }: Props) {
	return (
		<Link
			href={projectHref(project.slug)}
			className="group flex h-full flex-col gap-4 rounded-2xl border bg-card p-6 transition-colors hover:border-accent"
		>
			<div className="flex items-start justify-between gap-4">
				<h3 className="text-2xl font-semibold">{project.title[locale]}</h3>
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
			<span className="sr-only">{openLabel}</span>
		</Link>
	)
}
