import * as express from 'express';
import * as bodyParser from 'body-parser';
import {AddressService} from './service/AddressService';
import TYPES from './types';
import kernel from './inversify.config';
import {logger} from './util/Logger';
import {Address} from './model/Address';

const app: express.Application = express();
app.use(bodyParser.json());

const addressService: AddressService = kernel.get<AddressService>(TYPES.AddressService);

app.route('/')
    .get(async(req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const addresses = await addressService.getAddresses();
            res.json(addresses);
        } catch (err) {
            next(err);
        }
    })
    .post(async(req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const address = new Address(
                req.body.address1,
                req.body.address2,
                req.body.city,
                req.body.state,
                req.body.zip,
                req.body.country
            );
            const createdAddress = await addressService.createAddress(address);
            res.json(createdAddress);
        } catch (err) {
            next(err);
        }
    });

app.route('/:id')
    .get(async(req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const addresses = await addressService.getAddress(<string> req.params.id);
            res.json(addresses);
        } catch (err) {
            next(err);
        }
    })
    .put(async(req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const address = new Address(
                req.body.address1,
                req.body.address2,
                req.body.city,
                req.body.state,
                req.body.zip,
                req.body.country,
                req.body.id
            );

            const updatedAddress = await addressService.updateAddress(address);
            res.json(updatedAddress);
        } catch (err) {
            next(err);
        }
    });

app.use(function (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
    logger.error(err.stack);
    next(err);
});

app.use(function (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(500).send('Internal Server Error');
});

app.listen(3000, function () {
    logger.info('Example app listening on port 3000!');
});
