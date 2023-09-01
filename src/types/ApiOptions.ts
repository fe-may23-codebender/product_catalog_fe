/* eslint-disable import/no-cycle */
import { ProductCategory } from '.';

export interface ApiOptions {
  category: ProductCategory;
  searchParams: string;
}
