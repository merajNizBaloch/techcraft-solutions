import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Existing animation components intentionally synchronize with the DOM in effects.
      // Keep these patterns build-safe while we progressively refactor the large homepage.
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/immutability": "off",
      // Marketing copy contains natural apostrophes/quotes throughout JSX text.
      "react/no-unescaped-entities": "off",
      // Prefer-const is stylistic and should not block branch validation.
      "prefer-const": "warn",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
