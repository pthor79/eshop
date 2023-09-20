export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  pictureUrl: string;
  quantityInStock?: number;
  brand: string;
  type?: string;
}

export interface ProductParams {
  orderBy?: string;
  searchTerm?: string;
  types: string[];
  brands: string[];
  pageNumber: number;
  pageSize: number;
}
