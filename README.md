# Task: [Link](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.rtfo3o71ktll)

## How to run the app

1. Install dependencies:

Navigate to the project folder and run:

### `npm install`

2. Run in development mode:

After installing dependencies, start the development server with:

### `npm start`

This will open the app at http://localhost:8080, and it will automatically reload when changes are made to the code.

3. Build for production:

To create a production-ready version of the app, run:

### `npm run build`

This command generates optimized static files in the 'build' folder. These files are minified, and the filenames include hashes for caching purposes.

Your app is ready to be deployed!

## Folder Structure

The folder structure of the project is organized as follows:
• index.html: Main HTML file where the app is rendered.
• /src: Contains index.js (main entry point of the app) and style.css files for the app.
• assets/icons: Contains .svg icon files.
• package.json: The project configuration file that includes metadata, dependencies, and scripts.
• webpack.config.js: Webpack configuration file that bundles and optimizes the app.
• /build: Contains the production build of the app (generated by npm run build).
• /node_modules: Contains all the dependencies installed via npm install.

## Additional available Scripts

In the project directory, you can run the following commands:

### `npm run lint`

Runs ESLint to check the code for linting issues and auto-fix them.

### `npm run prepare`

Installs Husky hooks to enforce code quality standards during commits.

### `npm run precommit`

Runs lint-staged to automatically fix and add changed files before committing.

## Linting and Formatting

This project uses ESLint to maintain code quality. The following steps are followed:
• Pre-commit hooks: Before each commit, lint-staged ensures that only properly linted files are staged for commit.
• Automatic fixes: The ESLint configuration automatically applies fixes to your JavaScript files.
