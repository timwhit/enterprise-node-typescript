import { injectable, inject } from 'inversify';
import {Address} from '../model/Address';
import {AddressRepository} from '../repository/AddressRepository';
import TYPES from '../types';
import 'reflect-metadata';

export interface AddressService {
    getAddresses(): Promise<Array<Address>>;
}

@injectable()
export class AddressServiceImpl {
    @inject(TYPES.AddressRepository)
    private addressRepository: AddressRepository;

    public async getAddresses(): Promise<Array<Address>> {
        return this.addressRepository.findAll();
    }
}
