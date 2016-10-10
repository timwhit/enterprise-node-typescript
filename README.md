# Node.js Boilerplate with TypeScript

Run `npm install` after cloning this repository. The project provides the following scripts:

- `npm start` will start the server in development mode. It uses **nodemon** to watch for changes and restart the server.
  It will run **tslint** over the source files after every restart, but errors will not stop the server from running.
  TypeScript files are compiled on-the-fly using **ts-node**.

- `npm run prod` will start the server in production mode. Files are still compiled with **ts-node** but are not linted or monitored by **nodemon**.

- `npm run lint` will run **tslint** on all source files.
  The *tslint.json* file should be configured to your preferred coding style.

- `npm test` will run the pre-configured **tape** tests, but can be replaced with your preferring testing framework.
