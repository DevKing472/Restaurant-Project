import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://challenge-react.alkemy.org/';
  currentUserSubject: BehaviorSubject<any>;
  parcero: boolean | undefined;

  constructor(private http: HttpClient) {
    console.log('El servicio de autenticación está corriendo');
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  IniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(this.url, credenciales).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);

        this.parcero = true;

        return data;
      })
    );
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  loggedIn() {
    return this.parcero;
  }
  logoutUser() {
    this.parcero = false;
    sessionStorage.clear();
    localStorage.clear();

    this.currentUserSubject.next(null);
    alert('LOGOUT!');
  }
}
