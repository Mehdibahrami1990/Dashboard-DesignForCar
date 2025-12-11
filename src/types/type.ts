export interface ProductListProps {
  id: string;
  image: string;
  model: string;
  type: string;
  status: string;
  price: number;
}
export interface ProductsResponse {
  products: ProductListProps[];
}