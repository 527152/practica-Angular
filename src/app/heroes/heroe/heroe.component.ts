import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html',
    styleUrls:['./heroe.component.css']
        
})
export class HeroeComponent{
    nombre: string='Facundo';
    edad: number=21;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    nombreEdad():string{
        return `${this.nombre} ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }
    cambiarEdad():void{
        this.edad= 33;
    }
}