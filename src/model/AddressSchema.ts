import {Core, Model, Instance, Collection, Index, Property, ObjectID} from 'iridium';
import {Table, Column, PrimaryGeneratedColumn, PrimaryColumn} from 'typeorm';

export interface AddressDTO {
    _id?: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

/**
 * Iridium config
 */
@Index({name: 1})
@Collection('addresses')
export class AddressSchema extends Instance<AddressDTO, AddressSchema> implements AddressDTO {
    @ObjectID
    public _id: string;
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
    public Addresses = new Model<AddressDTO, AddressSchema>(this, AddressSchema);
}

export const database = new AddressDatabase({database: 'test_db'});

// database.connect().then(() => database.Addresses.remove()).then(() => database.Addresses.get()).then(() => database.close());

/**
 * TypeORM Schema Config
 */
@Table('address')
export class AddressDbSchema implements AddressDTO {
    @PrimaryColumn()
    public _id?: string;
    @Column()
    public address1: string;
    @Column()
    public address2?: string;
    @Column()
    public city: string;
    @Column()
    public state: string;
    @Column()
    public zip: string;
    @Column()
    public country: string;
}
