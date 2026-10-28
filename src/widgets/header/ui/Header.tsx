import { useTranslations } from 'next-intl'
import { NAV_SECTIONS, site } from '@/shared/config'
import { Link } from '@/shared/i18n'
import { LocaleSwitcher } from './LocaleSwitcher'
import { MobileMenu } from './MobileMenu'

export function Header() {
	const t = useTranslations('Nav')

	return (
		<header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
				<Link
					href="/"
					className="font-heading text-lg font-semibold tracking-tight"
				>
					{site.name}
				</Link>

				<nav className="hidden items-center gap-6 text-sm md:flex">
					{NAV_SECTIONS.map(section => (
						<Link
							key={section}
							href={{ pathname: '/', hash: section }}
							className="text-muted-foreground transition-colors hover:text-foreground"
						>
							{t(section)}
						</Link>
					))}
				</nav>

				<LocaleSwitcher className="hidden md:flex" />
				<MobileMenu />
			</div>
		</header>
	)
}
