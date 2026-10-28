import { describe, expect, it } from 'vitest'
import { routing } from '@/i18n/routing'
import en from '@/messages/en.json'
import kk from '@/messages/kk.json'
import ru from '@/messages/ru.json'
import { projects } from './projects'

// Плоский список ключей словаря: `Nav.projects`, `Hero.title`, …
function keys(obj: object, prefix = ''): string[] {
	return Object.entries(obj).flatMap(([key, value]) =>
		typeof value === 'object'
			? keys(value, `${prefix}${key}.`)
			: [`${prefix}${key}`]
	)
}

describe('messages', () => {
	it('у всех локалей одинаковые ключи', () => {
		const reference = keys(ru).sort()
		expect(keys(kk).sort()).toEqual(reference)
		expect(keys(en).sort()).toEqual(reference)
	})
})

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
