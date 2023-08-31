import { client } from '../helpers/fetchClient';
import {
  Product,
  ProductCategory,
  ProductDescription,
  ProductInfo,
} from '../types';

export const getProducts = () => {
  return client.get<Product[]>('/products');
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
