# Портфолио

Личный сайт-портфолио на трёх языках: ru (по умолчанию), kk, en. Все страницы статические (SSG).

## Стек

| Слой        | Что                                                                     |
| ----------- | ----------------------------------------------------------------------- |
| Фреймворк   | Next.js 16 (App Router, Turbopack), React 19                            |
| Язык        | TypeScript (strict)                                                     |
| Стили       | Tailwind CSS v4, токены в `src/app/styles/tokens.css`                   |
| UI          | shadcn/ui на Base UI (`src/shared/ui`)                                  |
| Анимации    | GSAP + `@gsap/react` (ScrollTrigger, SplitText)                         |
| Скролл      | Lenis на тикере GSAP                                                    |
| i18n        | next-intl, URL `/ru`, `/kk`, `/en`                                      |
| Иконки      | lucide-react                                                            |
| Архитектура | Feature-Sliced Design, проверка — steiger                               |
| Контент     | `src/entities/project`, `src/shared/config`, `src/shared/i18n/messages` |
| Проверки    | ESLint, steiger, Prettier, Vitest                                       |

## Команды

```bash
pnpm dev          # http://localhost:3000 → /ru
pnpm build        # прод-сборка
pnpm start        # запуск собранного
pnpm typecheck    # next typegen + tsc
pnpm lint
pnpm lint:fsd     # правила FSD (steiger)
pnpm test         # проверка, что переводы и проекты заполнены во всех локалях
pnpm check        # всё сразу
pnpm format
```

Скопируйте `.env.example` в `.env.local` и укажите `NEXT_PUBLIC_SITE_URL`: из него собираются canonical, hreflang и sitemap.

## Структура (FSD)

```
app/                          # только роутинг Next.js: реэкспорты из src/
pages/                        # пустая, чтобы Next не трогал src/pages
proxy.ts                      # редирект на локаль
src/
  app/                        # LocaleLayout, стили и токены, шрифты, Lenis, sitemap/robots
  pages/
    home/ui/                  # HomePage + секции: Hero, Projects, About, Contact
    project/ui/               # страница проекта + metadata
    not-found/ui/
  widgets/
    header/                   # шапка, мобильное меню, переключатель языка
    footer/
  entities/
    project/                  # model: тип и данные проектов; ui: ProjectCard
  shared/
    config/                   # имя, почта, соцсети, якоря меню
    i18n/                     # routing, navigation, request, messages/{ru,kk,en}.json
    lib/                      # cn, gsap, seo
    ui/                       # shadcn (button, sheet) + SplitHeading, Reveal, Section
```

Слой `features` появится, когда понадобится действие пользователя, которое используют минимум в двух местах.

## Как добавить проект

1. Добавить объект в `src/entities/project/model/projects.ts`: `slug`, год, стек и тексты на трёх языках.
2. Страница `/{locale}/projects/{slug}` и запись в sitemap появятся сами.

## Деплой

Vercel: импортировать репозиторий и задать `NEXT_PUBLIC_SITE_URL`.
