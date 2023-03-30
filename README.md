# Traction.js

Simple customizable loading progress bar for nextjs and sveltekit.

# NextJS

## Install

NPM

```bash
npm install @traction.js/nextjs
```

Yarn

```bash
yarn add @traction.js/nextjs
```

PNPM

```bash
pnpm add @traction.js/nextjs
```

## Example

### \_app.tsx

```jsx
import { type AppType } from "next/app";
import Traction from "@traction.js/nextjs";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <Traction />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
```

# SvelteKit

## Install

NPM

```bash
npm install @traction.js/sveltekit
```

Yarn

```bash
yarn add @traction.js/sveltekit
```

PNPM

```bash
pnpm add @traction.js/sveltekit
```

## Example

### +layout.svelte

```svelte
<script>
  import Traction from "@traction.js/sveltekit";
</script>

<Traction />
<slot />
```

# Traction Props

## Default Props

```jsx
<Traction color="#FF0000" incrementInterval={100} incrementAmount={10} transitionDuration={500} transitionTimingFunction="ease" />
```

## Options

`color`: The hex color of the progress bar. `"#FF0000"`

`incrementInterval`: The interval in milliseconds between each increment. `100`

`incrementAmount`: The amount of progress to increment between each increment interval. `10`

`transitionDuration`: The duration in milliseconds of the transition. `500`

`transitionTimingFunction`: The type of transition timing function. `"ease" | "linear" | "ease-in" | "ease-out" | "ease-in-out"`
