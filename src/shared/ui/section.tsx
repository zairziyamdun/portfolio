import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

type Props = {
	id?: string
	className?: string
	children: ReactNode
}

// Общая сетка секций: ширина, поля и отступ под липкую шапку.
export function Section({ id, className, children }: Props) {
	return (
		<section
			id={id}
			className={cn(
				'mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6',
				className
			)}
		>
			{children}
		</section>
	)
}
