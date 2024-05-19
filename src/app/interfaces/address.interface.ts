export interface Address {
  addressee: string;
  county?: string;
  postcode: string;
  street1: string;
  street2?: string;
  town: string;
}

export interface AddressResponse extends Address {
  addressId: string;
}
