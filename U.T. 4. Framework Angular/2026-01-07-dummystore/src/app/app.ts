import { Component, signal } from '@angular/core';
import { CardProduct } from "./components/card-product/card-product";

@Component({
  selector: 'app-root',
  imports: [CardProduct],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('2026-01-07-dummystore');
}
