import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);

  /**
   * 
   * @param username 
   * @param password 
   * @returns The token JWT who identifies the user.
   */
  public validateUser$(username: string, password: string): Observable<string> {
    const url = 'https://dummyjson.com/auth/login';
    const body = {
      username,
      password,
    }
    return this.http.post(url, body).pipe(
      // @ts-ignore
      map(response => response.accessToken),
      delay(3000),
    );
  }
}
