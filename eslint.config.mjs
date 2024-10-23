import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import * as prettier from "prettier"; // Import Prettier

export default [
  {
    // Apply ESLint rules for TypeScript files
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: new URL(".", import.meta.url).pathname,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      prettier: prettierPlugin, // Include Prettier plugin
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules, // Spread TypeScript recommended rules
      "prettier/prettier": "error", // Enable Prettier formatting rules
    },
  },
];
