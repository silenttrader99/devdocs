# DevDocs

_devdocs_ is a high-functionality editor designed for writing code or articles using a markdown text editor. This tool allows developers to write, preview, and save code directly on their local machine, ensuring a seamless and efficient development experience. nestjsnote can be installed through [npm](https://www.npmjs.com/package/devdocs99), and it offers a variety of advanced features, detailed below.

## Features

- 📝**Markdown Editing**: Write articles or code snippets using markdown syntax, complete with preview.
- 💾**Code Persistence**: All code and text written in the editor are saved directly to your computer, providing automatic local backup.
- ⚛️**Integrated React and JavaScript Environment**: Build and test React components or JavaScript code, with immediate feedback.
- 📦**Access to npm Packages**: Easily import and utilize any npm package directly within the editor, expanding your project’s capabilities.
- 🔧**Customizable Configuration**: Various options for setting up your environment, including customizable ports and filenames.

## Technologies

DevDocs is built with the following tools to deliver a powerful, scalable, and user-friendly experience:

- [Typescript](https://www.typescriptlang.org/) : Type-safe development with JavaScript syntax.
- [React](https://reactjs.org/) : Frontend library for building user interfaces.
- [Redux](https://redux.js.org/) : State management for predictable behavior.
- [ESBuild](https://esbuild.github.io/) : High-speed bundling and compiling.
- [Babel](https://babeljs.io/) : JavaScript compiler for cross-environment compatibility.
- [Unpkg](https://unpkg.com/) : CDN for frontend packages.
- Styles powered by [Tailwind CSS](https://tailwindcss.com/) : Modern CSS framework.

## Installation and Setup

```bash
npx devdocs99 serve [options]
```

- Options : `-p` or `--port` to specify custom port, and `[filename]` to specify the file name.
- Default : Port 4050

## Code editor features

- **React Component Integration**: Use React to build interactive components directly within the editor, with real-time rendering in the preview pane.
  ![image_alt](https://github.com/silenttrader99/devdocs/blob/7cdb6b73c92387e4b0f94b05796174d24e63260a/screenshot-1.jpg)
- **`show()` Functionality**: Display any data type in the preview window. Variables, functions, and React components can share values across code cells.
  ![image_alt](https://github.com/silenttrader99/devdocs/blob/7cdb6b73c92387e4b0f94b05796174d24e63260a/screenshot-2.jpg)
- **NPM Package Support**: Import any npm package on-the-fly (e.g., `import axios from 'axios'`).
  ![image_alt](https://github.com/silenttrader99/devdocs/blob/7cdb6b73c92387e4b0f94b05796174d24e63260a/screenshot-3.jpg)

## Text editor features

- **Full markdown support**: refer to (https://www.markdownguide.org/cheat-sheet/) for guide of syntax.
