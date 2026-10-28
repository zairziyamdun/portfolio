import { describe, expect, it } from 'vitest'
import en from './messages/en.json'
import kk from './messages/kk.json'
import ru from './messages/ru.json'

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
