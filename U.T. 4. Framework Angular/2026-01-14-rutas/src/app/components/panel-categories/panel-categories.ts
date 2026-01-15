import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'panel-categories',
  imports: [CommonModule],
  templateUrl: './panel-categories.html',
  styleUrl: './panel-categories.css',
})
export class PanelCategories {
  private readonly productsService = inject(ProductsService);
  protected readonly categories$ = this.productsService.getCategories$();
}
