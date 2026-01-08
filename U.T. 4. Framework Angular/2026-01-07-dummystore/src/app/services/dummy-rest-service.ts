import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable, tap } from 'rxjs';

type ProductT = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

@Injectable({
  providedIn: 'root',
})
export class DummyRestService {
  private readonly http = inject(HttpClient);

  public getProducts$(): Observable<ProductT[]> {
    const url = 'https://dummyjson.com/products';
    // @ts-ignore
    return this.http.get(url).pipe(
      // @ts-ignore
      map((response) => response.products),
      map((products) =>
        // @ts-ignore
        products.map((product) => ({
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          image: product.images[0],
        }))
      ),
      delay(3000),
    );
  }
}
