// CREAMOS EL SERVICIO, QUE VAMOS A USAR EN EL COMPONENTE HOME

import { Injectable } from '@angular/core';

//Decorador necesario para inyectar el servicio
@Injectable()
export class RopaService{

    public coleccion_ropa = ['Pantalones blancos', 'Camiseta roja'];

    public nombre_prenda = "Vaqueros";

    prueba(nombre_prenda){
        return nombre_prenda;
    }

    addRopa(nombre_prenda:string):Array<string>{
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }

    getRopa():Array<string>{
        return this.coleccion_ropa;
    }

    deleteRopa(index:number){
        this.coleccion_ropa.splice(index, 1);
        return this.getRopa();
    }

}