// Контакты и ссылки — одно место для правки.
export const site = {
	url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
	name: 'Name Surname',
	email: 'hello@example.com',
	links: [
		{ label: 'Telegram', href: 'https://t.me/username' },
		{ label: 'GitHub', href: 'https://github.com/username' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/username' }
	]
} as const
