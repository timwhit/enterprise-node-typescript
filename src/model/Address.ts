export class Address {
    constructor(private streetAddress: string, private city: string, private state: string, private zip: string, private country: string) {
    }

    get getStreetAddress(): string {
        return this.streetAddress;
    }

    get getCity(): string {
        return this.city;
    }

    get getState(): string {
        return this.state;
    }

    get getZip(): string {
        return this.zip;
    }

    get getCountry(): string {
        return this.country;
    }
}
