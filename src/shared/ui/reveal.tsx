'use client'

import { useRef, type ReactNode } from 'react'
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from '@/shared/lib/gsap'

type Props = {
	children: ReactNode
	className?: string
}

// Дочерние элементы с data-reveal появляются пачкой при входе в экран.
export function Reveal({ children, className }: Props) {
	const ref = useRef<HTMLDivElement>(null)

	useGSAP(
		() => {
			const mm = gsap.matchMedia()
			mm.add(MOTION_OK, () => {
				if (!ref.current) return
				const items = ref.current.querySelectorAll('[data-reveal]')
				gsap.set(items, { autoAlpha: 0, y: 40 })
				ScrollTrigger.batch(items, {
					start: 'top 90%',
					once: true,
					onEnter: batch =>
						gsap.to(batch, {
							autoAlpha: 1,
							y: 0,
							duration: 0.8,
							ease: 'power3.out',
							stagger: 0.1
						})
				})
			})
			return () => mm.revert()
		},
		{ scope: ref }
	)

	return (
		<div
			ref={ref}
			className={className}
		>
			{children}
		</div>
	)
}
