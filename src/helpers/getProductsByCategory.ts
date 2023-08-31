import { Product, ProductCategory } from '../types';

export const getProductsByCategory = (
  products: Product[],
  category: ProductCategory,
) => products.filter((product) => product.category === category);
