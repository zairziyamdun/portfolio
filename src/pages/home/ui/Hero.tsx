import { ArrowDownIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/shared/i18n'
import { buttonVariants } from '@/shared/ui/button'
import { SplitHeading } from '@/shared/ui/split-heading'

export function Hero() {
	const t = useTranslations('Hero')

	return (
		<section className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-center gap-8 px-4 py-24 sm:px-6">
			<p className="font-mono text-sm text-accent">{t('eyebrow')}</p>
			<SplitHeading
				as="h1"
				className="max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl"
			>
				{t('title')}
			</SplitHeading>
			<p className="max-w-xl text-lg text-muted-foreground">{t('subtitle')}</p>
			<Link
				href={{ pathname: '/', hash: 'projects' }}
				className={buttonVariants({ size: 'lg', className: 'w-fit' })}
			>
				{t('cta')}
				<ArrowDownIcon data-icon="inline-end" />
			</Link>
		</section>
	)
}
