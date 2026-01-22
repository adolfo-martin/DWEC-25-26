import { Component } from '@angular/core';
import { ButtonShoppingcart } from "../button-shoppingcart/button-shoppingcart";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'navbar-app',
  imports: [ButtonShoppingcart, RouterLink],
  templateUrl: './navbar-app.html',
  styleUrl: './navbar-app.css',
  host: {
    class: 'flex items-center bg-blue-900 text-white py-1 px-2',
  },
})
export class NavbarApp {

}
