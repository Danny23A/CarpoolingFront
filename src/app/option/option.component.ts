import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Output()
  emitirOpciones = new EventEmitter<any>();

  public registroPasajero = false;
  public registroConductor = false;

  constructor() { }

  ngOnInit(): void {
  }



  redirigirARegistroConductor() {
    this.registroConductor = true;
  }

  redirigirARegistroPasajero() {
    this.registroPasajero = true;
  }

  public volver() {
    this.regresar();
  }

  regresar() {
    this.emitirOpciones.emit(false);
  }

  regresarDeRegistroPasajero() {
    this.registroPasajero = false;
  }

  regresarDeRegistroConductor() {
    this.registroConductor = false;
  }

}
