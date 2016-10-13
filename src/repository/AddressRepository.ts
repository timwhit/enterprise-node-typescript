import {injectable} from 'inversify';
import {Address} from '../model/Address';
import {repository, AddressDocument} from '../model/AddressSchema';

export interface AddressRepository {
    findAll(): Promise<Array<Address>>;
}

@injectable()
export class AddressRepositoryImpl implements AddressRepository {
    public async findAll(): Promise<Array<Address>> {
        /*repository.create(<AddressDocument> {address1: '123 blah', address2: '#1', city: 'Chicago', state: 'IL', zip: '60657', country: 'USA'}, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log('created new address');
            }
        });*/

        let addresses: Array<Address> = null;

        await repository.find((err, addressDocs: AddressDocument[]) => {
            if (err) {
                console.log(err);
            }

            addresses = addressDocs.map((address) => {
                return new Address(address.address1, address.address2, address.city, address.state, address.zip, address.country);
            });
        });

        return addresses;
    }
}
