'use client'

import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/shared/lib/gsap'

// Lenis крутится на тикере GSAP, чтобы ScrollTrigger видел тот же скролл.
export function SmoothScroll() {
	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

		const lenis = new Lenis({ anchors: true })
		const tick = (time: number) => lenis.raf(time * 1000)

		lenis.on('scroll', ScrollTrigger.update)
		gsap.ticker.add(tick)
		gsap.ticker.lagSmoothing(0)

		return () => {
			gsap.ticker.remove(tick)
			lenis.destroy()
		}
	}, [])

	return null
}
