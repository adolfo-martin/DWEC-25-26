import { Component, input, Input, computed } from '@angular/core';

@Component({
  selector: 'card-product',
  imports: [],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css',
})
export class CardProduct {
  // @Input('name') name: string = '';
  name = input<string>();
  private priceInput = input<string>('0', {alias: 'price-euros'});
  priceEuros = computed(() => parseFloat(this.priceInput()) || 0);
  image = input<string>();
}
