import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
 
  formularioContacto: FormGroup


  constructor ( private form: FormBuilder){
    // inicializamos el form
    this.formularioContacto = this.form.group ({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email:['', [Validators.required ,Validators.email] ]
    })

  }

  hasErrors(_controlName: string , errorType: string){
    return this.formularioContacto.get(_controlName)?.hasError(errorType) && this.formularioContacto.get(_controlName)?.touched

  }

  enviar(){
    console.log(this.formularioContacto)
  }
   

}
