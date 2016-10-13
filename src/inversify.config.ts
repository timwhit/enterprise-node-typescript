import {Kernel} from 'inversify';
import TYPES from './types';
import {AddressService, AddressServiceImpl} from './service/AddressService';
import {AddressRepository, AddressRepositoryImpl} from './repository/AddressRepository';

const kernel = new Kernel();
kernel.bind<AddressService>(TYPES.AddressService).to(AddressServiceImpl);
kernel.bind<AddressRepository>(TYPES.AddressRepository).to(AddressRepositoryImpl);

export default kernel;
