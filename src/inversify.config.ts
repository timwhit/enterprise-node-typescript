import {Kernel} from 'inversify';
import TYPES from './types';
import {AddressService, AddressServiceImpl} from './service/AddressService';
import {AddressRepository, AddressRepositoryImplMongo, AddressRepositoryImplDb} from './repository/AddressRepository';
import {AddressControllerImpl} from "./controller/AddressController";
import {RegistrableController} from "./controller/RegisterableController";

const kernel = new Kernel();
kernel.bind<RegistrableController>(TYPES.Controller).to(AddressControllerImpl);
kernel.bind<AddressService>(TYPES.AddressService).to(AddressServiceImpl);
kernel.bind<AddressRepository>(TYPES.AddressRepository).to(AddressRepositoryImplMongo);
kernel.bind<AddressRepository>(TYPES.AddressRepository2).to(AddressRepositoryImplDb);

export default kernel;
