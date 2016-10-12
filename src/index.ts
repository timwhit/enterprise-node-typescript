import * as express from 'express';
import * as winston from 'winston';
import {AddressService, AddressServiceImpl} from './service/AddressService';

const app: express.Application = express();
const addressService: AddressService = new AddressServiceImpl();

const logger: winston.LoggerInstance = new (winston.Logger)({exitOnError: false});

app.get('/', function (req: express.Request, res: express.Response) {
    res.send(addressService.getAddresses());
});

app.listen(3000, function () {
    logger.error('Example app listening on port 3000!');
});
