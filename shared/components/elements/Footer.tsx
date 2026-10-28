import { useTranslations } from 'next-intl'
import { site } from '@/content/site'

export function Footer() {
	const t = useTranslations('Footer')

	return (
		<footer className="border-t border-border/60">
			<div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
				<p>
					© {new Date().getFullYear()} {site.name}. {t('rights')}
				</p>
				<ul className="flex gap-4">
					{site.links.map(link => (
						<li key={link.href}>
							<a
								href={link.href}
								target="_blank"
								rel="noreferrer"
								className="transition-colors hover:text-foreground"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}
