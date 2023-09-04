import { client } from '../helpers/fetchClient';
import { getSearchWith } from '../helpers/searchHelper';
import {
  ProductCategory,
  ProductDescription,
  ProductInfo,
  ApiData,
  ApiOptions,
} from '../types';

export const getProducts = ({
  productCategory = '' as ProductCategory,
  searchParams,
}: Partial<ApiOptions>) => {
  const params = new URLSearchParams(searchParams || '');
  const preparedParams = getSearchWith(params, {
    productType: productCategory,
  });

  const normalizedSearchParams = preparedParams
    ? `?${preparedParams}`
    : '';

  return client.get<ApiData>(`/products${normalizedSearchParams}`);
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
