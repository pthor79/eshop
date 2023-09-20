export interface Basket {
  id: number;
  buyerId: string;
  items: BasketItem[];
  paymentIntentId?: string;
  clientSecret?: string;
}

export interface BasketItem {
  productId: number;
  name: string;
  price: number;
  pictureUrl: string;
  quantity: number;
  brand: string;
  type: string;
}
