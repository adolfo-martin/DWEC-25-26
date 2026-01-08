import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'card-product',
  imports: [],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css',
})
export class CardProduct {
  // @Input('name') name: string = '';
  name = input<string>();
  priceEuros = input<number>(0, {alias: 'price-euros'});
  image = input<string>();
}
