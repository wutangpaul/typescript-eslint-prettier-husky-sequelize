# Typescript ESLint Prettier Husky Vitest

A boilerplate project that sets up TypeScript development with ESLint, Prettier, Husky, and Vitest. The project also uses Nodemon for hot-reloading during development.

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Development Workflow](#development-workflow)
- [Linting](#linting)
- [Testing](#testing)
- [Git Hooks (Husky)](#git-hooks-husky)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:wutangpaul/typescript-eslint-prettier-husky-vitest.git
   cd typescript-eslint-prettier-husky-vitest
   ```

2. Install the dependencies:

   ```bash
   yarn install
   ```

## Available Scripts

The following scripts are available for development and testing:

- **Build the project**:

  ```bash
  yarn build
  ```

  This command compiles the TypeScript code in the `src/` directory to JavaScript and outputs it to the `dist/` directory.

- **Start the project**:

  ```bash
  yarn start
  ```

  This builds the project and runs the compiled JavaScript using Node.js.

- **Development mode**:

  ```bash
  yarn dev
  ```

  Runs the project using `nodemon` for hot-reloading in development. It automatically restarts the server whenever changes are detected in the `src/app.ts` file.

- **Lint the code**:

  ```bash
  yarn lint
  ```

  This command runs ESLint on all `.ts` files in the project to check for code style issues and potential errors.

- **Auto-fix lint issues**:

  ```bash
  yarn lint:fix
  ```

  Runs ESLint and automatically fixes issues where possible.

- **Run tests**:

  ```bash
  yarn test
  ```

  Runs the test cases using `vitest`.

## Development Workflow

To start working on the project in development mode:

1. Run `yarn dev` to start the development server using Nodemon.
2. Any changes made to the `src/app.ts` file will automatically restart the server.

## Linting

The project uses ESLint with the TypeScript ESLint plugin and Prettier for code formatting. To check the code style and formatting, run:

```bash
yarn lint
```

To automatically fix any issues, you can run:

```bash
yarn lint:fix
```

Prettier is also integrated with ESLint to ensure consistent code formatting.

## Testing

Testing is done using [Vitest](https://vitest.dev/), a fast unit testing framework for JavaScript and TypeScript. To run the tests:

```bash
yarn test
```

You can add your test files in the `tests/` directory or alongside the source files.

## Git Hooks (Husky)

This project uses [Husky](https://typicode.github.io/husky/#/) to manage Git hooks. The `prepare` script ensures that Husky is set up when dependencies are installed. You can configure hooks in the `.husky/` directory.

By default, Husky can be set to run tasks like linting or tests before pushing commits to ensure code quality and consistency.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

---

Author: Paul McClean (<pmcclean@petsafe.net>)
