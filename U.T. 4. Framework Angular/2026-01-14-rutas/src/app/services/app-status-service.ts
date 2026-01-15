import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStatusService {
  
  private token = signal<string|null>(null);

  public isLogged = computed(() => {
    if (this.token()) {
      return true;
    } else {
      return false;
    }
  });

  public fullname = computed(() => {
    if (this.isLogged()) {
      // @ts-ignore
      const decodedToken = decodeToken(this.token());
      return `${decodedToken.firstName} ${decodedToken.lastName}`;
    } else {
      return '';
    }

    function decodeToken(token: string) {
      const parseJwt = (token: string) => {
        try {
          return JSON.parse(atob(token.split('.')[1]));
        } catch (error) {
          // @ts-ignore
          throw new Error(`Problem decoding token "${token}": ${error.message}.`);
        }
      };
      const tokenDecodificado = parseJwt(token);
      return tokenDecodificado;
    }
  });

  public closeSession() {
    this.token.set(null);
  }

  public openSession(token: string) {
    this.token.set(token);
  }
}
