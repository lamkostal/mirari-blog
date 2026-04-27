# mirari

## Project Overview
`mirari` is an MTGArena blog built as a Nuxt 2 application.

- **Name:** `mirari`
- **Description:** `mirari, an mtgarena blog`
- **App type:** Nuxt 2 (`nuxt ^2.15.4`)
- **Mode:** `universal`
- **Target:** `static`

## Tech Stack
- **Framework:** Nuxt 2 (`^2.15.4`)
- **CMS Integration:** `storyblok-nuxt`, `storyblok-js-client`
- **Markdown Support:** `@nuxtjs/markdownit` (injected)
- **Styling:** `sass`, `sass-loader`

## Prerequisites
- Node.js and npm installed
- Access to install npm dependencies

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

## Available Scripts
- `npm run dev` - start development mode
- `npm run build` - build the application
- `npm run start` - start the built application
- `npm run generate` - generate static output

## Content & Static Generation
Static generation is configured to include:
- Core routes: `/`, `/posts`, `/about`
- Dynamic post routes: `/posts/:id` slugs fetched from the Storyblok API

## Project Structure
Notable page routes:
- `/`
- `/posts`
- `/posts/:id`
- `/about`
- `/calculator`
- `/contact`

Core directories:
- `pages/` - route-level pages
- `components/` - shared UI, navigation, and post components
- `assets/styles/` - global stylesheets

## Notes
- Storyblok is used as the content source via Nuxt and JS client integrations.
- Markdown rendering support is enabled through injected markdown-it integration.
- The app runs in `universal` mode while targeting static generation.
