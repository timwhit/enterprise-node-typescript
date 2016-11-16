import 'reflect-metadata';
import * as test from 'tape';
import {AddressController} from '../src/controller/AddressController';

test('addressController', (t) => {
    t.plan(1);

    const controller = new AddressController(null);

    t.assert(controller != null);
});