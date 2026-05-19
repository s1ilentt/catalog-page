# Catalog Page

A modern e-commerce catalog built with Next.js 16, focused on performance, SEO, and user experience. Features server-side rendering with React Query hydration, URL-driven filtering and pagination, and a fully responsive layout.

## Description

The project implements a feature-rich product catalog with shareable URLs for any filter combination.

**Key features:**

- **SSR with Hydration:** Server-side prefetching via TanStack Query with full client hydration for instant first paint and SEO.
  <br/>

- **URL-Driven State:** All filters, sorting, and pagination are synchronized with URL search params — shareable, bookmarkable, and back/forward navigation works out of the box.
  <br/>

- **Smart Filtering:** Multi-value filters (colors, sizes) and single-value filters (category, material) with active filter chips and one-click reset.
  <br/>

- **Range Filter:** Interactive price range slider with manual input support, debounced URL updates.
  <br/>

- **Data Caching:** Three-layer caching — Next.js Data Cache, TanStack Query client cache, and ISR-friendly fetch revalidation.
  <br/>

- **Styling:** Sass modules with fluid typography, CSS custom properties, and component-scoped styles.
  <br/>

- **Architecture:** Built following Feature-Sliced Design (FSD) for clear separation of concerns and maintainability.

## Configuration

**The project uses this set of tools:**

- **Core:** Next.js 16, React 19, TypeScript 5.
  <br/>

- **State Management:** @tanstack/react-query v5 (with DevTools).
  <br/>

- **HTTP Client:** Axios with custom interceptors.
  <br/>

- **Styling:** Sass (CSS Modules), CSS custom properties, fluid typography mixins.
  <br/>

- **UI Components:** rc-slider (price range), clsx (className utilities).
  <br/>

- **Architecture:** Feature-Sliced Design (FSD).

## Startup Requirements

**For the application to work correctly you will need:**

- **Node.js:** version 20.x or higher.
  <br/>

- **Package Manager:** npm (version 10+) or pnpm.
  <br/>

- **Backend API:** a running backend service exposing the products and filters endpoints (see `.env.example`).

## Installation

1\. Cloning a repository:

```bash
git clone https://github.com/s1ilentt/catalog-page.git
cd catalog-page/client
```

2\. Environment Variables

Create a `.env` file in the root directory of the `client` folder:

```bash
touch .env
```

Find a detailed description of each variable, their purpose and example values inside the `.env.example` file. Don't forget to specify the **correct NEXT_PUBLIC_API_URL to communicate with your backend**.

3\. Installing dependencies:

```bash
npm install
# or if you are using pnpm
pnpm install
```

4\. Starting the application:

**Development mode:**

```bash
npm run dev
```

The application will be available at: http://localhost:3000

**Build for production:**

```bash
npm run build
npm run start
```

## Project Structure

The project follows Feature-Sliced Design (FSD) methodology:
