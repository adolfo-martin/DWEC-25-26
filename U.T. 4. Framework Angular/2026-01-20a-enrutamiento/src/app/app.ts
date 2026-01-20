import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('2026-01-20-enrutamiento');

  private readonly router = inject(Router);

  categoryClickedHandler($event: PointerEvent) {
    // @ts-ignore
    const categoryId = $event.target.dataset.category;
    this.router.navigate(['categories', categoryId, 'products']);
  }
}
