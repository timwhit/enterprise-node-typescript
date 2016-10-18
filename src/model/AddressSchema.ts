import {Core, Model, Instance, Collection, Index, Property, ObjectID} from 'iridium';

export interface AddressDocument {
    _id?: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

@Index({name: 1})
@Collection('addresses')
export class AddressSchema extends Instance<AddressDocument, AddressSchema> implements AddressDocument {
    @ObjectID
    public id: string;
    @Property(String, true)
    public address1: string;
    @Property(String, false)
    public address2: string;
    @Property(String, true)
    public city: string;
    @Property(String, true)
    public state: string;
    @Property(String, true)
    public zip: string;
    @Property(String, true)
    public country: string;
}

class AddressDatabase extends Core {
    public Addresses = new Model<AddressDocument, AddressSchema>(this, AddressSchema);
}

export const database = new AddressDatabase({database: 'test_db'});

database.connect().then(() => database.Addresses.insert({
    address1: '123 Fake St',
    city: 'Springfield',
    state: 'IL',
    zip: '12345',
    country: 'USA'
}))
    .then(() => database.Addresses.get())
    .then(() => database.close());
