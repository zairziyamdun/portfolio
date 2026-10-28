import fsd from '@feature-sliced/steiger-plugin'
import { defineConfig } from 'steiger'

export default defineConfig([
	...fsd.configs.recommended,
	{
		// Корневой app/ — роутинг Next.js, не слой FSD.
		ignores: ['app/**', 'pages/**']
	}
])
