import { Component, inject } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart-service';

@Component({
  selector: 'button-shoppingcart',
  imports: [],
  templateUrl: './button-shoppingcart.html',
  styleUrl: './button-shoppingcart.css',
})
export class ButtonShoppingcart {
  protected readonly service = inject(ShoppingCartService);
}
