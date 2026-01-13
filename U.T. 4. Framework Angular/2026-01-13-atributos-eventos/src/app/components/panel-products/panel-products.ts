import { Component, inject } from '@angular/core';
import { StoreMockService } from '../../services/store-mock-service';
import { CardProduct } from "../card-product/card-product";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'panel-products',
  imports: [CardProduct, CommonModule],
  templateUrl: './panel-products.html',
  styleUrl: './panel-products.css',
})
export class PanelProducts {
  private readonly service = inject(StoreMockService);
  protected readonly products$ = this.service.getProducts$();
}
