добавление tailwind:
Установка зависимостей
npm install -D tailwindcss@3.4.17 postcss autoprefixer
Инициализация Tailwind
npx tailwindcss init -p
Будут созданы файлы:
tailwind.config.js
postcss.config.js

добавление i18n:
npm i i18next react-i18next

Структура:
src/
│
├── app/
│   ├── App.tsx
│   ├── main.tsx
│   └── i18n/
│       ├── index.ts
│       └── locales/
│           ├── en.json
│           └── ru.json
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   │
│   └── sections/
│       └── Sections.tsx
│
├── features/
│   └── nav/
│       └── Nav.tsx
│
├── shared/
│   └── styles/
│       └── index.css
│
└── vite-env.d.ts

app/ — точка входа (как в Next / modern React)
layout/ — переиспользуемый каркас страницы
features/ — бизнес-логика (Nav — не layout, а feature)
shared/ — стили, утилиты, UI

