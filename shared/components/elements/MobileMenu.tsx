'use client'

import { MenuIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { Button } from '@/shared/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger
} from '@/shared/components/ui/sheet'
import { NAV_SECTIONS } from '@/shared/lib/nav'
import { LocaleSwitcher } from './LocaleSwitcher'

export function MobileMenu() {
	const t = useTranslations('Nav')
	const [open, setOpen] = useState(false)

	return (
		<Sheet
			open={open}
			onOpenChange={setOpen}
		>
			<SheetTrigger
				render={
					<Button
						variant="ghost"
						size="icon-lg"
						className="size-11 md:hidden"
						aria-label={t('menu')}
					/>
				}
			>
				<MenuIcon />
			</SheetTrigger>
			<SheetContent className="gap-8 p-6">
				<SheetTitle>{t('menu')}</SheetTitle>
				<nav className="flex flex-col gap-4 text-2xl">
					{NAV_SECTIONS.map(section => (
						<Link
							key={section}
							href={{ pathname: '/', hash: section }}
							onClick={() => setOpen(false)}
						>
							{t(section)}
						</Link>
					))}
				</nav>
				<LocaleSwitcher className="mt-auto" />
			</SheetContent>
		</Sheet>
	)
}
