import {Address} from '../model/Address';

export interface AddressService {
    getAddresses(): Array<Address>;
}

export class AddressServiceImpl {
    public getAddresses(): Array<Address> {
        const address = new Address('123 fake st', 'Springfield', 'IL', '60612', 'USA');
        return [
              address
        ];
    }
}
