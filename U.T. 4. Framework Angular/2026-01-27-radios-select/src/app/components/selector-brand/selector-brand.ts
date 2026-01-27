import { Component } from '@angular/core';
import { vehicles } from '../../data';

@Component({
  selector: 'selector-brand',
  imports: [],
  templateUrl: './selector-brand.html',
  styleUrl: './selector-brand.css',
})
export class SelectorBrand {
  protected readonly brands = vehicles;
  selectedId = '';
  selectedName = '';

  brandChangedHanler(id: string, name: string) {
    this.selectedId = id;
    this.selectedName = name;
  }
}
