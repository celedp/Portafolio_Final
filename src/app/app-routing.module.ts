import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FormacionComponent } from './formacion/formacion.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'formacion', component: FormacionComponent},
  {path: 'contacto', component: ContactoComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
