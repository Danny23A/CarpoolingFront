import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {

  @Output()
  emitirConductor = new EventEmitter<any>();

  public categorias: string[] = [];

  public mostrarMensaje = false;
  public mensaje: string = '';

  formularioRegistro!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.categorias.push('A1');
    this.categorias.push('A2')
    this.categorias.push('B1')
    this.categorias.push('B2')
    this.categorias.push('C1')
    this.categorias.push('C2')
    this.categorias.push('C3')
  }

  public volver() {
    this.regresar();
  }
  regresar() {
    this.emitirConductor.emit(false);
  }

  

  inicializarFormulario() {
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      licencia: ['', [Validators.required]],
      catLicencia: ['', [Validators.required]],
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
