import { Phone } from '../types/Phone';
import { client } from '../helpers/fetchClient';

export const getPhones = () => {
  return client.get<Phone[]>('/products');
};
