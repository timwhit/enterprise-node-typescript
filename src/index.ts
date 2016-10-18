import * as express from 'express';
import {AddressService} from './service/AddressService';
import TYPES from './types';
import kernel from './inversify.config';
import {logger} from './util/Logger';

const app: express.Application = express();

const addressService: AddressService = kernel.get<AddressService>(TYPES.AddressService);

app.get('/', async (req: express.Request, res: express.Response) => {
    const addresses = await addressService.getAddresses();
    res.json(addresses);
});

app.listen(3000, function () {
    logger.info('Example app listening on port 3000!');
});
