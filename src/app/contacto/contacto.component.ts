import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
 
  public usuario: any = {
  nombre: '',
  email: ''
  
  }
  enviar(){
    console.log(this.usuario);
  }

}
