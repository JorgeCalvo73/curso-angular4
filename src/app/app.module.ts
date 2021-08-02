import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import {PlantillasComponent} from './plantillas/plantillas.component';

//Import para la pipe personalizada
import { ConversorPipe } from './pipes/conversor.pipe';

//Import para los formularios reactivos
//import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    HomeComponent,
    ContactoComponent,
    CochesComponent,
    PlantillasComponent,

    //La pipe hay que declararla
    ConversorPipe,

    //Añadimos el módulo de los formularios reactivos, pero como esto es Angular 4 no va
    //ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    //En los imports cargo mi módulo de rutas
    routing
  ],
  //En providers cargo mi provider de rutas, el que hace que el servicio se lance y funcionen las rutas
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }