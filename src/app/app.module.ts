import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { FormacionComponent } from './formacion/formacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectosService } from './services/proyectos.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PresentacionComponent,
    ProyectosComponent,
    HabilidadesComponent,
    ExperienciaLaboralComponent,
    FormacionComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
ProyectosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
