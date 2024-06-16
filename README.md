# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template vue
```

AstroStudioDb
https://studio.astro.build/

## 👀 Integrations

https://docs.astro.build/en/guides/integrations-guide/

@astrojs-service-worker
https://github.com/tatethurston/astrojs-service-worker#readme

@astrojs/tailwind
https://docs.astro.build/en/guides/integrations-guide/tailwind/

@astrojs/vue
https://docs.astro.build/en/guides/integrations-guide/vue/

@astrojs/db
https://docs.astro.build/en/guides/integrations-guide/db/

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run build --remote`  | Build your production site to with astrodb				|
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## Commands astro db

Pushear la estructura de config.ts
`pnpm astro db push`

Cargar base de datos local a remoto
`pnpm astro db execute db/seed.ts --remote`

Linkear el proyecto a la base de datos remota
`pnpm astro db link`