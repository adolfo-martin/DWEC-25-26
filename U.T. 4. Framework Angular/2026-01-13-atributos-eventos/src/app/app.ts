import { Component } from '@angular/core';
import { NavbarApp } from "./components/navbar-app/navbar-app";
import { FooterApp } from "./components/footer-app/footer-app";
import { CommonModule } from '@angular/common';
import { PanelHome } from "./components/panel-home/panel-home";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [NavbarApp, FooterApp, CommonModule, PanelHome, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  




  // productToCartAddedHandler(e: {
  //   target: CardProduct;
  //   productId: number;
  //   quantity: number;
  //   price: number;
  // }) {
  //   alert(e.target.name() + e.price + e.quantity);
  // }

  // favoriteStatusChangedHandler(e: any) {
  //   alert(e.target.name() + ' ' + e.isFavorite);
  // }
}
