import { client } from '../helpers/fetchClient';
import {
  ProductCategory,
  ProductDescription,
  ProductInfo,
  ApiData,
  ApiOptions,
} from '../types';

export const getProducts = ({
  category = 'products' as ProductCategory,
  searchParams = '',
}: Partial<ApiOptions>) => {
  const normalizedSearchParams = searchParams
    ? `?${searchParams.toString()}`
    : '';

  return client.get<ApiData>(`/${category}${normalizedSearchParams}`);
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
