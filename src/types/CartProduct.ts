import type { Product } from "../data/products";

export type CartProduct = Product & {
  quantity: number;
};
