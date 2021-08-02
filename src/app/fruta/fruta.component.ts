import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {

  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Pera, Manzana';

  public nombre:string;
  public edad:number;
  public mayorDeEdad:boolean;
  public trabajos:Array<any> = ['Albañil', 55, 'Fontanero'];
  comodin:any;

  constructor() {

    this.nombre = 'Jorge';
    this.edad = 23;
    this.mayorDeEdad = true;
    this.comodin = 'SI';

  }

  ngOnInit() {
    this.cambiarNombre();
    this.cambiarEdad(40);
    alert(this.nombre + " " + this.edad);
  }

  cambiarNombre(){
    this.nombre = 'Jorge Calvo';
  }

  cambiarEdad(edad){
    this.edad = edad;
  }

}
