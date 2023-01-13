export interface ICountry {
  id?: number;
  name?: string;
  code?: string;
}

export interface IPerson {
  id?: string;
  name?: string;
  country?: ICountry;
  birthDate?: Date;
}
