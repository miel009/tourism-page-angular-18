import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit , OnDestroy{
 
  formularioContacto: FormGroup
  tipoDni: string = 'DNI'
  mostrarDNI: Boolean = false
  enviado:Boolean= false
  mostrarAlerta: Boolean=false
  mensaje:String=''


  constructor ( private form: FormBuilder){
    // inicializamos el form 
    // validamos datos
    this.formularioContacto = this.form.group ({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''],
      email:['', [Validators.required ,Validators.email]]
    })

  }
  ngOnInit(): void {    
    this.formularioContacto.get('nombre')?.setValue('Melany')
    this.formularioContacto.get('nombre')?.disable() 
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe (value => {
      this.mostrarDNI= value !='' 
      this.tipoDni = value
    })
  }
  ngOnDestroy(): void {
      console.log('Se destruyo el componente')
  }


  hasErrors(_controlName: string , errorType: string){
    return this.formularioContacto.get(_controlName)?.hasError(errorType) && this.formularioContacto.get(_controlName)?.touched

  }

  enviar(){
    this.mostrarAlerta = false;
    if (this.formularioContacto.valid) {
      this.enviado = true;
      this.mensaje = 'Formulario enviado con éxito!';
    } else {
      this.mostrarAlerta = true; 
      // Mostrar la alerta si el formulario es inválido
    }
   
  }
}
