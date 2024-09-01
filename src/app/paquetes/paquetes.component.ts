import { Component, inject } from '@angular/core';
import { AuthserviceService } from '../servicios/authservice.service';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrl: './paquetes.component.css'
})
export class PaquetesComponent {


  private prueba = inject(AuthserviceService)
  

  
  
  

}
