import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carpooling';


  public mostrarOpciones = false;
  public iniciarSesion = false;



  redirigirAOpciones() {
    this.mostrarOpciones = true;
  }

  redirigirAIniciarSesion() {
    this.iniciarSesion = true;
  }

  regresarDeInicioSesion() {
    this.iniciarSesion = false;
  }

  regresarDeOpciones() {
    this.mostrarOpciones = false;
  }
}


