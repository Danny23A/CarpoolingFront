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
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],

    });
  }
  

  registrarse() {

    if (this.formularioRegistro.invalid) {
      return;
    }


    //let usuario: Usuario = new Usuario();

    //usuario.name = this.formularioRegistro.value.nombre;
    //usuario.lastName = this.formularioRegistro.value.apellido;
    //usuario.identificacion = this.formularioRegistro.value.identificacion;
    //usuario.email = this.formularioRegistro.value.correo;
    //usuario.password = this.formularioRegistro.value.clave;


    /**this.usuarioServicio.guardarUsuario(usuario)
       .toPromise()
       .then(usuario => {
         this.mostrarOpciones = true;
       }).catch(error => {
         this.mostrarMensaje = true;
         this.mensaje = error.error.messages[0].content;;
 
       });*/

  }

}
