import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyRestService } from '../../services/dummy-rest-service';
import { CommonModule } from '@angular/common';
import { DetailProduct, ProductSelectedEventT } from "../detail-product/detail-product";

@Component({
  selector: 'panel-buy-products',
  imports: [CommonModule, DetailProduct],
  templateUrl: './panel-buy-products.html',
  styleUrl: './panel-buy-products.css',
})
export class PanelBuyProducts {

  private readonly route = inject(ActivatedRoute);

  private readonly service = inject(DummyRestService);
  protected readonly categories$;
  
  constructor() {
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    // @ts-ignore
    this.categories$ = this.service.getProductsByCategory$(categoryId);
  }

  productSelectedHandler($event: ProductSelectedEventT) {
    alert('Producto añadido a la cesta: ' + $event.current.name());
  }
}
