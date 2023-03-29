# Traction.js

Loading progress bar for nextjs and sveltekit

# Examples

### NextJS: \_app.tsx

```javascript
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

### Sveltekit: +layout.svelte

```html
<script>
  import Traction from "@traction.js/sveltekit";
</script>

<Traction />
<slot />
```
