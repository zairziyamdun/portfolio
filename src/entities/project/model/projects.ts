import type { Project } from './types'

// Пример записи:
// {
// 	slug: 'my-project',
// 	year: 2026,
// 	stack: ['Next.js', 'TypeScript'],
// 	url: 'https://example.com',
// 	title: { ru: '…', kk: '…', en: '…' },
// 	role: { ru: '…', kk: '…', en: '…' },
// 	summary: { ru: '…', kk: '…', en: '…' },
// 	description: { ru: '…', kk: '…', en: '…' }
// }
export const projects: Project[] = []

export function getProject(slug: string): Project | undefined {
	return projects.find(project => project.slug === slug)
}

export function projectHref(slug: string) {
	return `/projects/${slug}`
}
