import {Document, Schema, Model, model} from 'mongoose';

export interface AddressDocument extends Document {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

export var addressSchema = new Schema({
     address1: String,
     address2: String,
     city: String,
     state: String,
     zip: String,
     country: String
});

export var repository = model<AddressDocument>('Address', addressSchema);
