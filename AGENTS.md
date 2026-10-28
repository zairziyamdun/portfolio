# AGENTS.md

Портфолио: Next.js 16 + TypeScript + Tailwind 4, shadcn/ui (Base UI), GSAP + Lenis, next-intl (ru, kk, en). Подробности — в [README.md](README.md).

## Архитектура — Feature-Sliced Design

- Слои в `src/`: `app → pages → widgets → features → entities → shared`. Импорт только вниз по слоям, соседние слайсы одного слоя друг друга не импортируют.
- В слайс — только через его `index.ts` (`@/entities/project`, не `@/entities/project/ui/...`). В `shared` — через сегмент (`@/shared/i18n`, `@/shared/config`, `@/shared/ui/button`).
- Корневой `app/` — только роутинг Next.js: файлы в одну строку с реэкспортом из `src/app` или `src/pages`. Логики там нет.
- Корневой `pages/` пустой и нужен, чтобы Next не принял `src/pages` за Pages Router. Не удалять.
- Секция, нужная одной странице, лежит в `pages/<page>/ui`. Виджет или фича появляются, только когда их используют минимум в двух местах.
- Проверка — `pnpm lint:fsd` (steiger).

## Правила

- **Строки интерфейса** — только через `t()`; новый ключ сразу во все три словаря `src/shared/i18n/messages/{ru,kk,en}.json`. Проекты — в `src/entities/project/model/projects.ts`, каждый текст `{ ru, kk, en }`.
- **Ссылки** — `Link` из `@/shared/i18n`, не из `next/link`.
- **Цвет** — только из токенов (`text-muted-foreground`, `bg-accent`); нет токена — завести в `src/app/styles/tokens.css`.
- **Классы** — через `cn()` из `@/shared/lib/cn`.
- **GSAP** — импорт только из `@/shared/lib/gsap`, анимации внутри `useGSAP` и `gsap.matchMedia(MOTION_OK)`, чтобы уважать reduced-motion.
- **Mobile-first**: база от 320px, без горизонтального скролла, тач-цель ≥ 44px.
- **Prettier**: табы, без `;`, одинарные кавычки, один атрибут на строку.
- **После правок**: `pnpm check` (typecheck + lint + lint:fsd + test).

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
