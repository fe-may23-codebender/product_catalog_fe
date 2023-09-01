import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product, ProductCategory } from '../../types';

type ApiOptions = {
  category: ProductCategory;
  searchParams: string;
};

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://codebender-catalog.onrender.com',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], Partial<ApiOptions>>({
      query: ({ category = 'products', searchParams = '' }) => {
        const normalizedSearchParams = searchParams
          ? `?${searchParams.toString()}`
          : '';

        return `/${category}${normalizedSearchParams}`;
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
