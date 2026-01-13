import { Component, input, model, output } from '@angular/core';

type FavoriteStatusChangedEventT = {
  target: CardProduct;
  isFavorite: boolean;
};

type ProductToCardAddedEventT = {
  target: CardProduct;
  productId: number;
  quantity: number;
  price: number;
};

@Component({
  selector: 'card-product',
  imports: [],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css',
})
export class CardProduct {
  productId = input.required<number>({ alias: 'product-id' });
  name = input.required<string>();
  price = input.required<number>();
  image = input.required<string>();

  favoriteStatusChangedEmitter = output<FavoriteStatusChangedEventT>({
    alias: 'favoritestatuschanged',
  });

  productToCartAddedEmitter = output<ProductToCardAddedEventT>({ alias: 'producttocartadded' });

  quantity = model<number>(0, { alias: 'quantity' });

  favoriteStatusChangedHandler(e: any) {
    const event = {
      target: this,
      isFavorite: e.target.checked,
    };
    this.favoriteStatusChangedEmitter.emit(event);
  }

  productToCartAddedHandler(value: string) {
    const event = {
      target: this,
      productId: this.productId(),
      quantity: parseInt(value),
      price: this.price(),
    };

    this.productToCartAddedEmitter.emit(event);
  }

}
