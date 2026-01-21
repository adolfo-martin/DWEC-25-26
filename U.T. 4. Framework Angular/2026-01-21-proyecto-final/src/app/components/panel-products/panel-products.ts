import { Component, inject } from '@angular/core';
import { AddProductToShoppingCartEventT, CardProduct } from '../card-product/card-product';
import { ShoppingCartService } from '../../services/shopping-cart-service';

@Component({
  selector: 'panel-products',
  imports: [CardProduct],
  templateUrl: './panel-products.html',
  styleUrl: './panel-products.css',
})
export class PanelProducts {
  service = inject(ShoppingCartService);

  addProductToShoppingCardHandler($event: AddProductToShoppingCartEventT) {
    this.service.addProduct({
      id: $event.productId,
      name: $event.productName,
      price: $event.productPrice,
    });
    console.log($event.productName);
  }
}
