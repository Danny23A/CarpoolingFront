import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlguardarUsuario = 'http://localhost:8080/api/user'
  private urlIngresarUsuario = 'http://localhost:8080/api/user/login'

  constructor(private http: HttpClient) { }


  guardarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlguardarUsuario, usuario);
  }

  ingresarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlIngresarUsuario, usuario);

  }
}

