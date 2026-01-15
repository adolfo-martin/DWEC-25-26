import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products-service';
import { CommonModule } from '@angular/common';
import { ButtonLogin } from "../button-login/button-login";

@Component({
  selector: 'navbar-app',
  imports: [RouterLink, CommonModule, ButtonLogin],
  templateUrl: './navbar-app.html',
  styleUrl: './navbar-app.css',
  host: {
    class: 'grid grid-cols-[auto_1fr_auto]',
  }
})
export class NavbarApp {
  private readonly service = inject(ProductsService);
  protected readonly categories$ = this.service.getCategories$();
}
