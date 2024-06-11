1. Run `npm i -D vitest jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom`

2. In package.jsonm scripts add `"test": "vitest"`

3. Create `setupTests.ts` file

```ts file="setupTests.ts"
import "@testing-library/jest-dom";
```

4. Update `vite.config.ts` file

```ts
/// <reference types="vitest" />  is a special syntax used in TypeScript known as a triple-slash directive. Specifically, this directive is used to include type declarations from a specific package—in this case, vitest. Because vite

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
```

5. In `tsconfig.json` In compiler options add `"types": ["@testing-library/jest-dom/vitest", "vitest/globals"],`
