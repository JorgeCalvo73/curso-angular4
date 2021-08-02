//FICHERO EN EL QUE HACEMOS EL ROUTING

//Imports para el router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports de componentes
import { EmpleadosComponent } from './empleados/empleados.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import {PlantillasComponent} from './plantillas/plantillas.component';

//Array de objetos de tipo Routes
const appRoutes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'empleado', component: EmpleadosComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: 'pagina-principal', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'coches', component: CochesComponent},
    {path: 'plantillas', component: PlantillasComponent},

    //De este modo hacemos que la url acepte que le pasemos un parámetro.
    {path: 'contacto/:page', component: ContactoComponent},

    //El doble asterisco es para indicar que cuando falle una ruta, use esta por defecto.
    {path: '**', component: HomeComponent},
];

export const appRoutingProviders: any[] = [];

//Coge las rutas que le indicamos y las inyecta en la configuración de las rutas del framework.
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);