import { Component, input, output } from '@angular/core';

export type ProductSelectedEventT = {
  current: DetailProduct,
}

@Component({
  selector: 'detail-product',
  imports: [],
  templateUrl: './detail-product.html',
  styleUrl: './detail-product.css',
})
export class DetailProduct {

  id = input<number>(0, {alias: 'product-id'});
  name = input<string>();
  description = input<string>();
  image = input<string>();

  productSelectedEmitter = output<ProductSelectedEventT>({alias: 'productselected'});

  buyClickedHandler() {
    this.productSelectedEmitter.emit({current: this});
  }
}
