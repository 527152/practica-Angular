import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[]=['spiderman','hulk','capitan america','ironman'];
  heroeBorrado: string='';
  noBorrado: string = '';

  borrado():void{
    this.heroeBorrado = this.heroes.shift() || '' ;
    
  }
}
