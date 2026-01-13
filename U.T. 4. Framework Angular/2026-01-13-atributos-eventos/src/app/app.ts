import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardProduct } from './components/card-product/card-product';

@Component({
  selector: 'app-root',
  imports: [CardProduct],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  productToCartAddedHandler(e: {
    target: CardProduct;
    productId: number;
    quantity: number;
    price: number;
  }) {
    alert(e.target.name() + e.price + e.quantity);
  }

  favoriteStatusChangedHandler(e: any) {
    alert(e.target.name() + ' ' + e.isFavorite);
  }
}
