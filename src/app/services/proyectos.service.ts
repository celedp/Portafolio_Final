
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proyecto } from '../models/proyecto.model';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private proyectos: Proyecto[] = [
    {
      id: 1,
      nombre: 'proyecto 1',
      descripcion: 'descripcion del proyecto 1',
      imagen: '../../assets/img/portfolio1.jpg',
      enlace: 'http://www.proyecto1.com'
    },
    {
      id: 2,
      nombre: 'ToDo List',
      descripcion: 'descripcion del proyecto 2',
      imagen: '../../assets/img/portfolio2.jpg',
      enlace: 'http://www.proyecto2.com' 
    },
    {
      id: 3,
      nombre: 'proyecto 3',
      descripcion: 'descripcion del proyecto 3',
      imagen: '../../assets/img/portfolio3.jpg',
      enlace: 'http://www.proyecto3.com'
    },
  ]
 constructor() { }

 getProyectos(): Observable<Proyecto[]> {
  return of(this.proyectos);
 }
   
getProyecto(id: number): Observable<Proyecto | undefined> {
  return of(this.proyectos.find(proyectos => proyectos.id === id));

}

agregarProyecto(proyecto: Proyecto): Observable<Proyecto[]>{
  this.proyectos.push(proyecto);
  return of(this.proyectos);
}

editarProyecto(proyecto: Proyecto): Observable<Proyecto[]> {
  const index = this.proyectos.findIndex(p => p.id === proyecto.id);
  if (index !== -1) {
    this.proyectos[index] = proyecto;
    
  }
  return of(this.proyectos);
}

eliminarProyecto(id:number): Observable<Proyecto[]> {
  const index = this.proyectos.findIndex(p => p.id === id);
  if (index !== -1) {
    this.proyectos.splice(index, 1);
  }
  return of(this.proyectos);
}

}