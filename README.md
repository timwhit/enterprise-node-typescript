# Node.js Boilerplate with TypeScript

Install `yarn`:

```
   brew update
   brew install yarn
```

Run `yarn` after cloning this repository. The project provides the following scripts:

- `yarn start` will start the server in development mode. It uses **nodemon** to watch for changes and restart the server.
  It will run **tslint** over the source files after every restart, but errors will not stop the server from running.
  TypeScript files are compiled on-the-fly using **ts-node**.

- `yarn debug` will start the server in development mode with debugging available on port `5858`.

- `yarn run prod` will start the server in production mode. Files are still compiled with **ts-node** but are not linted or monitored by **nodemon**.

- `yarn run lint` will run **tslint** on all source files.
  The *tslint.json* file should be configured to your preferred coding style.

- `yarn test` will run the pre-configured **tape** tests, but can be replaced with your preferring testing framework.

## Main Libraries

- [Express](http://expressjs.com/) - web framework
- [InversifyJS](https://github.com/inversify/InversifyJS) - TypeScript DI/IoC framework
- [Iridium](https://github.com/SierraSoftworks/Iridium) - TypeScript Mongo ODM
- [TypeORM](https://github.com/typeorm/typeorm) - TypeScript ORM (uses sqlite as an example)
- [winston](https://github.com/winstonjs/winston) - logging framework

## Example architecture

The example follows a 3-tier architecture of controller -> service -> repository. The repository layer produces and accepts DTOs, the service and controller layers produce and accept models.