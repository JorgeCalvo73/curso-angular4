//Usamos este componente para probar el servicio de peticiones AJAX y para los formularios reactivos

import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import {PeticionesService} from '../services/peticiones.service';

//Los formularios reactivos no van al ser Angular4
//import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [PeticionesService]
})
export class CochesComponent implements OnInit {

  public coche: Coche;

  /*
  formulario_coches = new FormGroup({
    modelo: new FormControl(''),
    marca: new FormControl(''),
    color: new FormControl(''),
  });
  */

  public articulos;

  constructor(private _peticionesService: PeticionesService) { 
    this.coche = new Coche("", "", "");
  }

  ngOnInit() {

    //Usamos el .subscribe para suscribirnos al Observable y poder recoger el resultado o el error.
    this._peticionesService.getArticulos().subscribe(
      //Tenemos dos arrow functions, una para capturar el resultado y otra para capturar el error.
      result =>{
        this.articulos = result;

        if(!this.articulos){
          console.log("Error");
        }
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
      }

    );
  }

  /*
  onSubmit(){
    console.log(this.formulario_coches.value);
  }

  datosForm(){
    console.log(this.formulario_coches.value);
  }
  */
}
