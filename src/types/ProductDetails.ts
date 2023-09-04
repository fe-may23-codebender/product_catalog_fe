export type ProductInfo = {
  id: number;
  itemId: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
};

export type ProductDescription = {
  title: string;
  text: string[];
};

export type ProductDetails = ProductInfo & {
  description: ProductDescription[];
};
