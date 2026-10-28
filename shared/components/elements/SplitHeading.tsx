'use client'

import { useRef, type ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'
import { gsap, MOTION_OK, SplitText, useGSAP } from '@/shared/lib/gsap'

type Props = {
	children: ReactNode
	className?: string
	as?: 'h1' | 'h2'
}

// Заголовок выезжает по словам; при reduced-motion остаётся статичным.
export function SplitHeading({ children, className, as: Tag = 'h2' }: Props) {
	const ref = useRef<HTMLHeadingElement>(null)

	useGSAP(
		() => {
			const mm = gsap.matchMedia()
			mm.add(MOTION_OK, () => {
				if (!ref.current) return
				SplitText.create(ref.current, {
					type: 'lines,words',
					mask: 'lines',
					autoSplit: true,
					onSplit: self =>
						gsap.from(self.words, {
							yPercent: 110,
							duration: 0.9,
							ease: 'power4.out',
							stagger: 0.04,
							scrollTrigger: { trigger: ref.current, start: 'top 85%' }
						})
				})
			})
			return () => mm.revert()
		},
		{ scope: ref }
	)

	return (
		<Tag
			ref={ref}
			className={cn('text-balance', className)}
		>
			{children}
		</Tag>
	)
}
