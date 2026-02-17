TopApp — Educational Courses Aggregator

TopApp — современное frontend-приложение, агрегатор образовательных курсов, построенное на Next.js 15 (App Router), React 19 и TypeScript.

Проект разработан как pet-project и направлен на демонстрацию:

- архитектурного мышления

- работы с Server Components и SSR

- качественного UX, доступности и анимаций

- масштабируемой структуры frontend-кода

Основные возможности:

- Каталог образовательных курсов

- Поиск и сортировка контента

- Рейтинги и отзывы

- Server-Side Rendering (SSR)

- Server Components (Next.js App Router)

- Модальные окна

- Loading / empty / error состояния

- Адаптивная вёрстка (mobile / desktop)

- Базовая доступность (a11y)

- Анимации и UI-переходы

Технологический стек
Core

- Next.js 15 (App Router)

- React 19

- TypeScript (strict mode)

UI / UX

- CSS Modules

- Анимации и переходы на уровне компонентов

- SVGR (SVG как React-компоненты)

State & Logic

- React Context

- Кастомные React-хуки

- Server-side data fetching

Code Quality

- ESLint (Next.js Core Web Vitals)

- Strict TypeScript configuration

- Алиасы путей (@/*)

- Чистая типизация без any

Архитектура проекта

Проект построен по layered / component-oriented architecture
с чётким разделением ответственности между слоями.

api/            — работа с API и endpoint-конфигурация
app/            — маршрутизация и страницы (Next.js App Router)
components/     — UI и бизнес-компоненты
interfaces/     — TypeScript-интерфейсы и типы
layout/         — layout-компоненты и структура страниц
hooks/          — кастомные React-хуки
helpers/        — утилитарные функции
context/        — глобальное состояние интерфейса
public/         — статические ресурсы

Архитектурные принципы

- разделение UI и бизнес-логики

- минимизация связности компонентов

- переиспользуемые хуки и UI-компоненты

- подготовка структуры к масштабированию

Работа с данными

- Server-side data fetching

- Обработка loading / error состояний

- Типизация всех ответов API

Доступность (a11y)

- семантическая HTML-разметка

- корректная работа с фокусом

- доступные модальные окна

- базовая клавиатурная навигация

Цели проекта

- показать современный подход к разработке frontend-приложений

- отработать Next.js App Router и Server Components

- продемонстрировать архитектуру, близкую к production

- сфокусироваться на UX, читаемости кода и поддерживаемости