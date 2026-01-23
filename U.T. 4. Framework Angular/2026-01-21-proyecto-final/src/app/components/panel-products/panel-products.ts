import { Component, inject } from '@angular/core';
import { AddProductToShoppingCartEventT, CardProduct } from '../card-product/card-product';
import { ShoppingCartService } from '../../services/shopping-cart-service';
import { ActivatedRoute } from '@angular/router';
import { DummyRestService } from '../../services/dummy-rest-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'panel-products',
  imports: [CardProduct, CommonModule],
  templateUrl: './panel-products.html',
  styleUrl: './panel-products.css',
})
export class PanelProducts {
  service = inject(ShoppingCartService);
  private readonly route = inject(ActivatedRoute);
  private readonly restService = inject(DummyRestService);
  readonly products$ = this.restService.getProducts$();

  constructor() {
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    console.log(categoryId)
  }

  addProductToShoppingCardHandler($event: AddProductToShoppingCartEventT) {
    this.service.addProduct({
      id: $event.productId,
      name: $event.productName,
      price: $event.productPrice,
    });
    console.log($event.productName);
  }
}
