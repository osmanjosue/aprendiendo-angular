import { Component } from '@angular/core';
import {Configuracion} from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title = 'Master de Javascript y Angular';
 public descripcion:string;
 public mostrar_videojuego:boolean=true;
 public config:any;

constructor(){
  this.config=Configuracion;
  this.title= Configuracion.titulo;
  this.descripcion=Configuracion.desceipcion;
}

 ocultar_videojuego(value:boolean){
   this.mostrar_videojuego=value;
 }

}
