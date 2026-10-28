# AGENTS.md

Портфолио: Next.js 16 + TypeScript + Tailwind 4, shadcn/ui (Base UI), GSAP + Lenis, next-intl (ru, kk, en). Подробности — в [README.md](README.md).

## Правила

- **Строки интерфейса** — только через `t()`; новый ключ сразу во все три словаря `messages/{ru,kk,en}.json`. Контент проектов — в `content/projects.ts`, каждый текст `{ ru, kk, en }`.
- **Ссылки** — `Link` из `@/i18n/navigation`, не из `next/link`.
- **Цвет** — только из токенов (`text-muted-foreground`, `bg-accent`); нет токена — завести в `shared/styles/tokens.css`.
- **Классы** — через `cn()` из `@/shared/lib/cn`.
- **GSAP** — импорт только из `@/shared/lib/gsap`, анимации внутри `useGSAP` и `gsap.matchMedia(MOTION_OK)`, чтобы уважать reduced-motion.
- **Mobile-first**: база от 320px, без горизонтального скролла, тач-цель ≥ 44px.
- **Prettier**: табы, без `;`, одинарные кавычки, один атрибут на строку.
- **После правок**: `pnpm typecheck && pnpm lint && pnpm test`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
