import { Component, inject, signal } from '@angular/core';
import { CardProduct } from "./components/card-product/card-product";
import { DummyRestService } from './services/dummy-rest-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CardProduct, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly service = inject(DummyRestService);
  protected readonly products$ = this.service.getProducts$();
}
