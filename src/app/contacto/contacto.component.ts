import { Component, OnInit } from '@angular/core';

//Imports para pasar un parámetro en la url de contacto.
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public titulo = "Página de contacto de la web";
  public parametro;

  constructor(private _route: ActivatedRoute, private _router: Router) {

  }

  ngOnInit() {

    //Los parámetros de la URL los recogemos con el método forEach que tiene el router, usamos también una arrow function.
    this._route.params.forEach((params: Params)=>{
      this.parametro = params['page'];
      console.log(params);
    });
  }

  //Método para redirigir a una página que tenga un parámetro.
  redirigir(){
    //Este método se puede usar sin pasarle ningún parámetro.
    this._router.navigate(['/contacto', 'Holaaaaa']);
  }

}
