// src/app/models/product.model.ts
export interface Product {
  productId: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  categoryId: number;
}
