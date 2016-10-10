# Node.js Boilerplate with TypeScript

**npm start** will start the server in development mode. It uses *nodemon* to watch for changes and restart the server.
It will run *TSlint* over the source files after every restart, but errors will not stop the server from running.
TypeScript files are compiled on-the-fly.

**npm run prod** will start the server in production mode.

**npm run lint** will run *TSlint* on all source files.
The *tslint.json* file should be configured to your preferred coding style.

**npm test** will run the pre-configured *Tape* tests, but can be replaced with your preferring testing framework.
