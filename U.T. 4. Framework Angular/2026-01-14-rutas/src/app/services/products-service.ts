import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';

type CategoryT = {
  slug: string,
  name: string,
}


@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private readonly http = inject(HttpClient);

  public getCategories$(): Observable<CategoryT[]> {
    // @ts-ignore
    return this.http.get('https://dummyjson.com/products/categories').pipe(
    // @ts-ignore
      delay(3000),
    );
  }
}
