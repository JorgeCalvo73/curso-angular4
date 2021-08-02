import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  //TODO LO RELACIONADO CON LAS PRENDAS DE ROPA ES LA PARTE DE LOS SERVICIOS

  //Mediante esto se nos genera la instancia del servicio.
  providers: [RopaService]
})
export class HomeComponent implements OnInit {

  public titulo = "Página principal";

  public listado_ropa:Array<string>;
  public prenda_a_guardar:string;

  public fecha;
  public nombre = "Jorge Calvo";

  //Instanciamos el servicio en el constructor.
  constructor(private _ropaService: RopaService) {
    this.fecha = new Date(2017, 4, 15);
  }

  ngOnInit() {
    console.log(this._ropaService.prueba('Camiseta'));

    this.listado_ropa = this._ropaService.getRopa();
  }

  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }

  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
  }

}
