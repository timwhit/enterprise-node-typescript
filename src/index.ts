import * as express from 'express';
import {AddressService, AddressServiceImpl} from './service/AddressService';

const app: express.Application = express();
const addressService: AddressService = new AddressServiceImpl();

app.get('/', function (req: express.Request, res: express.Response) {
    res.send(addressService.getAddresses());
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
