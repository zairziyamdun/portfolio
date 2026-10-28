'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

// Плагины регистрируются один раз; компоненты импортируют GSAP только отсюда.
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export const MOTION_OK = '(prefers-reduced-motion: no-preference)'

export { gsap, ScrollTrigger, SplitText, useGSAP }
