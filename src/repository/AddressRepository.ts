import {injectable} from 'inversify';
import {database, AddressDocument} from '../model/AddressSchema';

export interface AddressRepository {
    findAll(): Promise<Array<AddressDocument>>;
}

@injectable()
export class AddressRepositoryImpl implements AddressRepository {
    public async findAll(): Promise<Array<AddressDocument>> {
        const addressDocuments = await database.connect().then(() => database.Addresses.find());
        return addressDocuments.toArray();
    }
}
