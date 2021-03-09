export interface Message {
  message: string;
}

export interface BaseEntity {
  id: string | null;
}

export interface User extends BaseEntity {
  firstname: string,
  lastname: string,
  email: string,
  birthDate: string,
  address: Address
}

export interface Address extends BaseEntity {
  street: string,
  city: string,
  country: string,
  postalcode: string
}