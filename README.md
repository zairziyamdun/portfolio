# Портфолио

Личный сайт-портфолио на трёх языках: ru (по умолчанию), kk, en. Все страницы статические (SSG).

## Стек

| Слой      | Что                                                         |
| --------- | ----------------------------------------------------------- |
| Фреймворк | Next.js 16 (App Router, Turbopack), React 19                |
| Язык      | TypeScript (strict)                                         |
| Стили     | Tailwind CSS v4, токены в `shared/styles/tokens.css`        |
| UI        | shadcn/ui на Base UI (`shared/components/ui`)               |
| Анимации  | GSAP + `@gsap/react` (ScrollTrigger, SplitText)             |
| Скролл    | Lenis на тикере GSAP                                        |
| i18n      | next-intl, URL `/ru`, `/kk`, `/en`                          |
| Иконки    | lucide-react                                                |
| Контент   | `content/projects.ts`, `content/site.ts`, `messages/*.json` |
| Проверки  | ESLint, Prettier, Vitest                                    |

## Команды

```bash
pnpm dev          # http://localhost:3000 → /ru
pnpm build        # прод-сборка
pnpm start        # запуск собранного
pnpm typecheck    # next typegen + tsc
pnpm lint
pnpm test         # проверка, что переводы и проекты заполнены во всех локалях
pnpm format
```

Скопируйте `.env.example` в `.env.local` и укажите `NEXT_PUBLIC_SITE_URL`: из него собираются canonical, hreflang и sitemap.

## Структура

```
app/[locale]/                 # layout, главная, projects/[slug], 404
app/sitemap.ts, robots.ts
i18n/                         # routing, navigation, request
proxy.ts                      # редирект на локаль
messages/ru.json kk.json en.json
content/projects.ts           # проекты; каждый текст — { ru, kk, en }
content/site.ts               # имя, почта, соцсети
shared/components/ui/         # shadcn
shared/components/elements/   # Header, Footer, SplitHeading, Reveal, …
shared/components/providers/  # SmoothScroll (Lenis)
shared/lib/                   # cn, gsap, seo, nav
shared/styles/tokens.css
```

## Как добавить проект

1. Добавить объект в `content/projects.ts`: `slug`, год, стек и тексты на трёх языках.
2. Страница `/{locale}/projects/{slug}` и запись в sitemap появятся сами.

## Деплой

Vercel: импортировать репозиторий и задать `NEXT_PUBLIC_SITE_URL`.
