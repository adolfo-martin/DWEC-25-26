import { Component, signal } from '@angular/core';
import { SelectorBrand } from "./components/selector-brand/selector-brand";
import { SelectorBrandWithSelect } from "./components/selector-brand-with-select/selector-brand-with-select";

@Component({
  selector: 'app-root',
  imports: [SelectorBrand, SelectorBrandWithSelect],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
