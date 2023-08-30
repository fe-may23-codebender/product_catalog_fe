/* eslint-disable no-param-reassign */
import { Product, CategoryMap, ProductCategory } from '../types';

export const getProductsCount = (products: Product[]) => {
  const productsCount: CategoryMap = Object.values(ProductCategory).reduce(
    (acc, category) => {
      acc[category] = 0;

      return acc;
    },
    {} as CategoryMap,
  );

  products.forEach((product) => {
    productsCount[product.category] += 1;
  });

  return productsCount;
};
