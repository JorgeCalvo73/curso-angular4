import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';
 
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public titulo = 'Componente empleados';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;

  public trabajador_externo:boolean;
  public color:string;

  public color_seleccionado:string;

  constructor() { 
    this.empleado = new Empleado('Jorge Calvo', 23, 'Programador', true);
    this.trabajadores = [
      new Empleado('Ana', 20, 'Cocinera', false),
      new Empleado('Víctor', 50, 'Camarero', true),
      new Empleado('Carlos', 34, 'Programador', false)
    ];

    this.trabajador_externo = false;
    this.color = 'blue';

    this.color_seleccionado = '#ccc'
  }

  ngOnInit() {
    
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }

  logColorSeleccionado(){
    console.log(this.color_seleccionado);
  }

}
