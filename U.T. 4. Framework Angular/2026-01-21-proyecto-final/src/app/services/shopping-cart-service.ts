import { computed, Injectable, signal } from '@angular/core';

export type ProductT = {
  id: number,
  name: string,
  price: number,
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private shoppingCart = signal<ProductT[]>([]);

  public readonly quantity = computed(() => {
    return this.shoppingCart().length;
  });

  addProduct(product: ProductT) {
    this.shoppingCart.update(cart => {
      cart.push(product);
      return [...cart];
    });
  }
}
