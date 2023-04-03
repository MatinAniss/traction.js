# Traction.js

Simple customizable loading progress bar for nextjs and sveltekit.

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
