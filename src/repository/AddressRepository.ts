import {injectable} from 'inversify';
import {Address} from '../model/Address';
import {database, AddressDocument} from '../model/AddressSchema';

export interface AddressRepository {
    findAll(): Promise<Array<Address>>;
}

@injectable()
export class AddressRepositoryImpl implements AddressRepository {
    public async findAll(): Promise<Array<Address>> {
        const addressDocuments = await database.connect().then(() => database.Addresses.find());

        return addressDocuments.map((doc: AddressDocument) => {
            return new Address(doc.address1, doc.address2, doc.city, doc.state, doc.zip, doc.country);
        });
    }
}
