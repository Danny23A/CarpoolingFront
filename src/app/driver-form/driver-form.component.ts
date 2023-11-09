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
      primerNombre: ['', [Validators.required]],
      segundoNombre: ['', Validators.required],
      primerApellido: ['', [Validators.required]],
      segundoApellido: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      licencia: ['', [Validators.required]],
      catLicencia: ['', [Validators.required]],
      fechaExpiracion: ['', [Validators.required]],
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
    //usuario.licenseNumber = this.formularioRegistro.value.licencia;
    //usuario.category = this.formularioRegistro.value.catLicencia;
    //Usuario.expiration = this.formularioRegistro.value.fechaExpiracion;


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
