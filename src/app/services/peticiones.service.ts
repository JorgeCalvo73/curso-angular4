//Servicio para trabajar con peticiones AJAX y demás

import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PeticionesService{

    /*Para poder usar el servicio HTTP y hacer peticiones AJAX tenemos que tener una propiedad HTTP en la clase.
    */
    public url: string;
    constructor(private _http:Http){
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    getPrueba(){
        return 'Hola mundo desde el servicio';
    }

    //Con el método get del http hacemos la llamada, y con el método .map recogemos la respuesta mediante una arrow function. 
    //Con res.json() convertimos el JSON en un objeto usable para JS.
    getArticulos(){
        return this._http.get(this.url)
                        .map(res => res.json());
    }

}