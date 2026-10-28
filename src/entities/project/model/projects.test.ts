import { describe, expect, it } from 'vitest'
import { routing } from '@/shared/i18n'
import { projects } from './projects'

describe('projects', () => {
	it('slug уникальны', () => {
		const slugs = projects.map(project => project.slug)
		expect(new Set(slugs).size).toBe(slugs.length)
	})

	it('тексты заполнены во всех локалях', () => {
		for (const project of projects) {
			for (const field of [
				project.title,
				project.role,
				project.summary,
				project.description
			]) {
				for (const locale of routing.locales) {
					expect(field[locale].trim(), `${project.slug}/${locale}`).not.toBe('')
				}
			}
		}
	})
})
