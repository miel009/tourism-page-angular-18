import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrl: './dni.component.css'
})
export class DniComponent  implements OnChanges {
  
  @Input() tipoDni: string = 'DNI' 
  formularioDocumento: FormGroup
  variableNueva: string = 'DNI'

  
  constructor ( private form: FormBuilder){
    this.formularioDocumento = this.form.group ({
      dni: [''],
      
    })
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      this.variableNueva = changes?.['tipoDni'].currentValue
  }
  
  hasErrors(_controlName: string , errorType: string){
    return this.formularioDocumento.get(_controlName)?.hasError(errorType) && this.formularioDocumento.get(_controlName)?.touched

  }
  


}
