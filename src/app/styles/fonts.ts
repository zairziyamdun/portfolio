import { Inter, JetBrains_Mono } from 'next/font/google'

// cyrillic-ext нужен для казахских букв (ә, ғ, қ, ң, ө, ұ, ү, һ, і).
export const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin', 'cyrillic', 'cyrillic-ext']
})

export const mono = JetBrains_Mono({
	variable: '--font-mono-jb',
	subsets: ['latin', 'cyrillic']
})
