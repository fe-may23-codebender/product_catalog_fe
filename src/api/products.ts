import { client } from '../helpers/fetchClient';
import {
  Product,
  ProductCategory,
  ProductDescription,
  ProductInfo,
} from '../types';

export const getProducts = (searchParams = '') => {
  const normalizedSearch = searchParams ? `?${searchParams}` : '';

  return client.get<Product[]>(`/products${normalizedSearch}`);
};

export const getProductInfo = (
  productCategory: ProductCategory,
  productId: string,
) => {
  return client.get<ProductInfo>(`/${productCategory}/${productId}`);
};

export const getProductDescription = (productId: string) => {
  return client.get<ProductDescription[]>(`/descriptions/${productId}`);
};
