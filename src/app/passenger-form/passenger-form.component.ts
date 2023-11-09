import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit {

  @Output()
  emitirPasajero = new EventEmitter<any>();

  public mostrarMensaje = false;
  public mensaje: string = '';

  formularioRegistro!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  public volver() {
    this.regresar();
  }
  regresar() {
    this.emitirPasajero.emit(false);
  }

  inicializarFormulario() {
    this.formularioRegistro = this.formBuilder.group({
      primerNombre: ['', [Validators.required]],
      segundoNombre: ['', Validators.required],
      primerApellido: ['', [Validators.required]],
      segundoApellido: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required]],
      telefono: ['', [Validators.required]],

    });
  }
  

  registrarse() {

    if (this.formularioRegistro.invalid) {
      return;
    }


    //let usuario: Usuario = new Usuario();

    //usuario.firstName = this.formularioRegistro.value.PrimerNombre;
    //usuario.secondName = this.formularioRegistro.value.segundoNombre;
    //usuario.firstSurname = this.formularioRegistro.value.primerApellido;
    //usuario.secondSurname = this.formularioRegistro.value.segundoApellido;
    //usuario.dni = this.formularioRegistro.value.identificacion;
    //usuario.CompanyEmail= this.formularioRegistro.value.correo;
    //usuario.password = this.formularioRegistro.value.clave;
    //usuario.phone = this.formularioRegistro.value.telefono;


  }

}
