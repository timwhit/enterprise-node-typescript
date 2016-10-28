export class Address {
    constructor(private address1: string,
                private address2: string,
                private city: string,
                private state: string,
                private zip: string,
                private country: string,
                private id?: string) {
    }

    get getAddress1(): string {
        return this.address1;
    }

    get getAddress2(): string {
        return this.address2;
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

    get getId(): string {
        return this.id;
    }
}
