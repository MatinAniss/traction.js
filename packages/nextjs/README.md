# Traction.js

Loading progress bar for nextjs

# Example

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
```
