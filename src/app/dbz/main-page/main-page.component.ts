import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  ciudad: string;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent {
  
  personajes: Personaje[]=[
    {
      nombre:'facundo',
      ciudad:'cordoba',
    },
    {
      nombre:'elias',
      ciudad:'santa fe',
    }
  ]

  nuevo: Personaje = {
    nombre:'',
    ciudad : '',
  }
  
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    this.personajes.push(this.nuevo);
    this.nuevo={
      nombre:'',
      ciudad:'',
    }
    
  }
}
