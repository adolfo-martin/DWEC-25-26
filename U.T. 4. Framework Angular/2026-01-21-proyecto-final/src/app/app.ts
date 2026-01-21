import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarApp } from "./components/navbar-app/navbar-app";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('2026-01-21-proyecto-final');
}
