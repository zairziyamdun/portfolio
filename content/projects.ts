import type { Locale } from '@/i18n/routing'

// Текст на всех трёх языках: пропуск перевода ловит TypeScript.
export type Localized = Record<Locale, string>

export type Project = {
	slug: string
	year: number
	stack: string[]
	url?: string
	repo?: string
	title: Localized
	role: Localized
	summary: Localized
	description: Localized
}

export const projects: Project[] = [
	{
		slug: 'circle-buro',
		year: 2026,
		stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'],
		url: 'https://circleburo.kz',
		title: {
			ru: 'CIRCLE Creative Buro',
			kk: 'CIRCLE Creative Buro',
			en: 'CIRCLE Creative Buro'
		},
		role: {
			ru: 'Фронтенд-разработка',
			kk: 'Фронтенд-әзірлеу',
			en: 'Frontend development'
		},
		summary: {
			ru: 'Сайт креативного бюро с 3D-сценами и CMS.',
			kk: '3D-сахналары мен CMS бар шығармашылық бюро сайты.',
			en: 'Creative agency website with 3D scenes and a CMS.'
		},
		description: {
			ru: 'Опишите задачу, своё решение и результат.',
			kk: 'Міндетті, шешіміңізді және нәтижені сипаттаңыз.',
			en: 'Describe the problem, your solution and the outcome.'
		}
	},
	{
		slug: 'opkit',
		year: 2026,
		stack: ['React', 'Vite', 'TanStack', 'GSAP'],
		url: 'https://opkit.kz',
		title: { ru: 'Opkit', kk: 'Opkit', en: 'Opkit' },
		role: {
			ru: 'Фронтенд-разработка',
			kk: 'Фронтенд-әзірлеу',
			en: 'Frontend development'
		},
		summary: {
			ru: 'Веб-приложение и лендинг продукта.',
			kk: 'Өнімнің веб-қосымшасы және лендингі.',
			en: 'Product web app and landing page.'
		},
		description: {
			ru: 'Опишите задачу, своё решение и результат.',
			kk: 'Міндетті, шешіміңізді және нәтижені сипаттаңыз.',
			en: 'Describe the problem, your solution and the outcome.'
		}
	}
]

export function getProject(slug: string): Project | undefined {
	return projects.find(project => project.slug === slug)
}
