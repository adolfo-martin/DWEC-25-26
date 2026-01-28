import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable, tap } from 'rxjs';

export type ProductsT = {
  id: number,
  name: string,
  price: number,
  image: string,
  description: string,
}

@Injectable({
  providedIn: 'root',
})
export class DummyRestService {
  private readonly http = inject(HttpClient);

  public getProducts$() {
    const url = 'https://dummyjson.com/products?select=id,title,price,thumbnail,description&delay=1000';
  }

  public getProductsByCategory$(categoryId: string): Observable<ProductsT[]> {
    const url = `https://dummyjson.com/products/category/${categoryId}?select=id,title,price,thumbnail,description`;
    return this.http.get(url).pipe(
      tap(console.log),
      map(response => response.products),
      tap(console.log),
      // @ts-ignore
      map(products => products.map(product => ({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.thumbnail,
        description: product.description,
      }))),
      tap(console.log),
      delay(2000),
    );
  }


}
