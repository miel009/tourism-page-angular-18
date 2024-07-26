import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit{
 
  formularioContacto: FormGroup
  usuarioActivo: any = {
    nombre: 'Melany',
    apellido: 'Ascencio',
    dni: '51368679',
  }


  constructor ( private form: FormBuilder){
    // inicializamos el form 
    // validamos datos
    this.formularioContacto = this.form.group ({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: [''],
      dni: ['', [Validators.required, Validators.minLength(3)]],
      email:['', [Validators.required ,Validators.email]]
    })

  }

  ngOnInit(): void {
    // tambien se puede validar aca, depende de las validaciones necesarias
   // this.formularioContacto.get('apellido')?.setValidators([Validators.required, Validators.minLength(3)])

    // para borrar las validaciones anteriores: // en este caso para apellido
    this.formularioContacto.get('apellido')?.clearValidators()
    this.formularioContacto.get('apellido')?.updateValueAndValidity()
    // setear por uno
    //this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo)

    // setear en grupos: 
    this.formularioContacto.patchValue({
      nombre: this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
      dni: this.usuarioActivo.dni,
    })
    this.formularioContacto.get('nombre')?.disable()
    // this.formularioContacto.get('apellido')?.disable()
    this.formularioContacto.get('dni')?.disable()
    //para setear nombre si es que ya se conoce el usuario.
  }

  hasErrors(_controlName: string , errorType: string){
    return this.formularioContacto.get(_controlName)?.hasError(errorType) && this.formularioContacto.get(_controlName)?.touched

  }

  enviar(){
    console.log(this.formularioContacto)
  }
   

}
