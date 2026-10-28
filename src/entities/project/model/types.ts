import type { Localized } from '@/shared/i18n'

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
