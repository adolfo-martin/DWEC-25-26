import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

type ProductT = {
  id: number,
  title: string,
  price: number,
  thumbnail: string,
}

@Injectable({
  providedIn: 'root',
})
export class DummyRestService {
  private readonly http = inject(HttpClient);

  public getProducts$(): Observable<ProductT[]> {
    const url = 'https://dummyjson.com/products?select=id,title,category,price,thumbnail&limit=10000000';
    return this.http.get(url).pipe(
      // @ts-ignore
      map(response => response.products),
    )
  }

  public getProductsByCategory$(categoryId: string): Observable<ProductT[]> {
    const url = `https://dummyjson.com/products/category/${categoryId}?select=id,title,category,price,thumbnail&limit=10000000`

    return this.http.get(url).pipe(
      // @ts-ignore
      map(response => response.products),
    )

  }

}
