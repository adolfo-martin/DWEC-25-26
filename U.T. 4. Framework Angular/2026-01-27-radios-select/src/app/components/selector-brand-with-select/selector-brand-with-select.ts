import { Component } from '@angular/core';
import { vehicles } from '../../data';

@Component({
  selector: 'selector-brand-with-select',
  imports: [],
  templateUrl: './selector-brand-with-select.html',
  styleUrl: './selector-brand-with-select.css',
})
export class SelectorBrandWithSelect {
  readonly brands = vehicles;
  
  selectedId = '';
  selectedName = '';

  brandChangedHandler(brandId: string) {
    this.selectedId = brandId;
    this.selectedName = this.brands.find(brand => brand.id === brandId)?.name ?? '';
  }
}
