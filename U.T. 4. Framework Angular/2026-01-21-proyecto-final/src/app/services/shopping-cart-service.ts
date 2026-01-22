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

  public readonly totalImport = computed( () => this.shoppingCart().reduce((acc, cur) => acc += cur.price, 0) );

  addProduct(product: ProductT) {
    this.shoppingCart.update(cart => {
      cart.push(product);
      // return [...cart];
      return Array.from(cart);
    });
  }
}
