import { Component ,OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto.model';
import { ProyectosService } from '../services/proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
proyectos: Proyecto[]=  [];

constructor(private proyectosService: ProyectosService) { }

ngOnInit(): void {
  this.proyectosService.getProyectos().subscribe(proyectos =>{
    this.proyectos = proyectos;
  });
}

editProyecto(proyecto: Proyecto) {

  console.log('Editando proyecto:', proyecto);
}

deleteProyecto(proyecto: Proyecto){

  console.log('Eliminando proyecto:', proyecto); 
}

}
