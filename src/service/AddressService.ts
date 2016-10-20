import { injectable, inject } from 'inversify';
import {Address} from '../model/Address';
import {AddressRepository} from '../repository/AddressRepository';
import TYPES from '../types';
import 'reflect-metadata';
import {AddressDocument} from '../model/AddressSchema';

export interface AddressService {
    getAddresses(): Promise<Array<Address>>;
}

@injectable()
export class AddressServiceImpl {
    @inject(TYPES.AddressRepository)
    private addressRepository: AddressRepository;

    public async getAddresses(): Promise<Array<Address>> {
        return await this.addressRepository.findAll().then((addresses) => addresses.map((doc: AddressDocument) => {
            return new Address(doc.address1, doc.address2, doc.city, doc.state, doc.zip, doc.country);
        }));
    }
}
