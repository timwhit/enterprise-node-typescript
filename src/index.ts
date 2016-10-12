import * as express from 'express';
import {Logger, LoggerInstance, LoggerOptions, transports} from 'winston';
import {AddressService, AddressServiceImpl} from './service/AddressService';

const app: express.Application = express();
const addressService: AddressService = new AddressServiceImpl();

const logger: LoggerInstance = new Logger(<LoggerOptions> {
    exitOnError: false,
    transports: [
        new transports.Console()
    ]
});

app.get('/', function (req: express.Request, res: express.Response) {
    res.send(addressService.getAddresses());
});

app.listen(3000, function () {
    logger.info('Example app listening on port 3000!');
});
