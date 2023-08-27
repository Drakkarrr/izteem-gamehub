# Izteem gamehub

Welcome to the Game Marketplace Platform, a simple web application built using React and TypeScript that provides access to game information through the RAWG API.

## Features

- Browse and search for games using the RAWG API.
- View detailed information about each game, including release date, platform, and description.
- User-friendly UI built with Chakra UI and styled-components.
- Smooth animations and transitions powered by framer-motion.
- Form handling and validation with react-hook-form.
- Strongly typed codebase using TypeScript and Zod for validation.
- Efficient development environment with Vite.

## UI Screenshot

Here's a glimpse of the user interface:

![UI Screenshot](src/assets/ui-screenshots/homepage.jpg)

## Dependencies

The project utilizes the following dependencies:

### Main Dependencies

- [@chakra-ui/react](https://chakra-ui.com/): A component library for building user interfaces.
- [@emotion/react](https://emotion.sh/docs/introduction): Library for styling React components using emotion.
- [@hookform/resolvers](https://react-hook-form.com/): Form validation resolvers for react-hook-form.
- [axios](https://axios-http.com/): Promise-based HTTP client for making API requests.
- [framer-motion](https://www.framer.com/motion/): Animation library for React applications.
- [react](https://reactjs.org/): JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): Entry point to the DOM and server renderers for React.
- [react-hook-form](https://react-hook-form.com/): Library for flexible form validation and handling.
- [react-icons](https://react-icons.github.io/react-icons/): Library for popular icon packs as React components.
- [styled-components](https://styled-components.com/): Library for styling React components using tagged template literals.
- [zod](https://github.com/colinhacks/zod): TypeScript-first schema validation.

### Dev Dependencies

- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint): ESLint plugin for TypeScript support.
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint): TypeScript parser for ESLint.
- [@vitejs/plugin-react](https://github.com/vitejs/vite/tree/main/packages/plugin-react): Vite plugin for React support.
- [eslint](https://eslint.org/): Pluggable linting utility.
- [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript): Airbnb's ESLint config with TypeScript support.
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Disables ESLint rules that conflict with Prettier.
- [eslint-import-resolver-typescript](https://github.com/alexgorbatchev/eslint-import-resolver-typescript): ESLint TypeScript import resolver.
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import): ESLint plugin for linting import/export syntax.
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): Runs Prettier as an ESLint rule.
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): ESLint plugin for React rules.
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks): ESLint plugin for React Hooks rules.
- [prettier](https://prettier.io/): Opinionated code formatter.
- [typescript](https://www.typescriptlang.org/): Superset of JavaScript that adds static types to the language.
- [vite](https://vitejs.dev/): Fast development build tool.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/game-marketplace.git`
2. Navigate to the project directory: `cd game-marketplace`
3. Install dependencies: `npm install`

## Usage

1. Obtain an API key from the [RAWG API](https://rawg.io/apidocs) and add it to your environment.
2. Start the development server: `npm run dev`
3. Open your browser and go to `http://localhost:3000`
