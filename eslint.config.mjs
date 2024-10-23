import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import eslintPlugin from "eslint"; // Default ESLint for JS files

export default [
  {
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      "coverage/",
      "*.min.js",
      "*.bundle.js"
    ],
    // Apply ESLint rules for TypeScript files
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: new URL(".", import.meta.url).pathname
      }
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      prettier: prettierPlugin // Include Prettier plugin
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules, // Spread TypeScript recommended rules
      "prettier/prettier": "error" // Enable Prettier formatting rules
    }
  },
  {
    // Apply ESLint rules for JavaScript and JSX files
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: eslintPlugin, // Use ESLint default parser for JS
      parserOptions: {
        ecmaVersion: 2021, // You can adjust ECMAScript version if needed
        sourceType: "module", // Enable ECMAScript modules
        ecmaFeatures: {
          jsx: true // Enable JSX if you have React/JSX
        }
      }
    },
    plugins: {
      prettier: prettierPlugin // Include Prettier plugin for JS/JSX
    },
    rules: {
      "prettier/prettier": "error", // Enable Prettier formatting rules
      "no-unused-vars": "error", // Example of standard JS rule
      "no-console": "warn" // Example of rule to catch console logs
    }
  }
];
