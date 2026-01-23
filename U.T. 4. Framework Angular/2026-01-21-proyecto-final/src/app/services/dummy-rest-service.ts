import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export type CategoryT = {
  id: string,
  name: string,
}

export type ProductDTO = {
  id: number,
  name: string,
  price: number,
  image: string,
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

  public getProducts$(): Observable<ProductDTO[]> {
    const url = 'https://dummyjson.com/products/?delay=1000&select=id,title,price,thumbnail';
    return this.http.get(url).pipe(
      // @ts-ignore
      map(response => response.products),
      // @ts-ignore
      map(products => products.map(product => ({ 
        id: product.id, 
        name: product.title, 
        price: product.price,
        image: product.thumbnail,
      }))),
    )
  }
}
