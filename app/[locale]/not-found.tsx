import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { buttonVariants } from '@/shared/components/ui/button'

export default function NotFound() {
	const t = useTranslations('NotFound')

	return (
		<section className="mx-auto flex min-h-[60dvh] max-w-6xl flex-col items-start justify-center gap-6 px-4 sm:px-6">
			<p className="font-mono text-sm text-accent">404</p>
			<h1 className="text-4xl font-semibold tracking-tight">{t('title')}</h1>
			<Link
				href="/"
				className={buttonVariants({ variant: 'outline' })}
			>
				{t('back')}
			</Link>
		</section>
	)
}
