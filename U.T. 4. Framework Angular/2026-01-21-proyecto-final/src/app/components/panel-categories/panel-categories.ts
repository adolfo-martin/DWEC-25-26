import { Component, inject } from '@angular/core';
import { DummyRestService } from '../../services/dummy-rest-service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'panel-categories',
  imports: [CommonModule, RouterLink],
  templateUrl: './panel-categories.html',
})
export class PanelCategories {
  private readonly restService = inject(DummyRestService);
  protected readonly categories$ = this.restService.getCategories$();
  selectedCategoryId = '';
  selectedCategoryName = '';

  categoryChangedHandler(id: string, name: string) {
    this.selectedCategoryId = id;
    this.selectedCategoryName = name;
  }

  // private readonly restService = inject(DummyRestService);
  // protected readonly categories$ = this.restService.getCategories$();
  // private readonly router = inject(Router);

  // categoryClickHandler($event: PointerEvent) {
  //   // @ts-ignore
  //   const categoryId = $event.target.dataset.categoryId;
  //   this.router.navigate(['categories', categoryId, 'products']);
  // }
}
