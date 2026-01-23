import { Component, input, output } from '@angular/core';

export type AddProductToShoppingCartEventT = {
  target: CardProduct;
  currentTarget: CardProduct;
  productId: number;
  productName: string;
  productPrice: number;
};

@Component({
  selector: 'card-product',
  imports: [],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css',
  host: {
    class: 'inline-flex flex-col gap-2 p-4 bg-gray-300 rounded-3xl',
  }
})
export class CardProduct {
  public readonly productId = input<number>(0, { alias: 'product-id' });
  public readonly productName = input<string>('', { alias: 'name' });
  public readonly productPrice = input<number>(0, { alias: 'price' });
  public readonly productImage = input<string>('', { alias: 'image'});

  public readonly addProductToShoppingCartEmitter = output<AddProductToShoppingCartEventT>({
    alias: 'addproducttoshoppingcart',
  });

  addProductToShoppingCartHandler($event: PointerEvent) {
    const event = {
      target: this,
      currentTarget: this,
      productId: this.productId(),
      productName: this.productName(),
      productPrice: this.productPrice(),
    };
    this.addProductToShoppingCartEmitter.emit(event);
  }
}
