export interface ICustomer {
  id?: number;
  create?: string | null;
  manager?: string | null;
}

export const defaultValue: Readonly<ICustomer> = {};
