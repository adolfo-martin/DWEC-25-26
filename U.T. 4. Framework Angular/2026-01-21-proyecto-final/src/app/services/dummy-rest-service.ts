import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export type CategoryT = {
  id: string,
  name: string,
}

@Injectable({
  providedIn: 'root',
})
export class DummyRestService {
  private readonly http = inject(HttpClient);

  public getCategories$(): Observable<CategoryT[]> {
    const url = 'https://dummyjson.com/products/categories?delay=1000';
    return this.http.get<{slug: string, name: string}[]>(url).pipe(
      map(categories => categories.map(category => ({ id: category.slug, name: category.name}))),
    )
  }
}
