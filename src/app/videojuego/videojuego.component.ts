import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
@Component({
        selector: 'videojuego',
        templateUrl: './videojuego.component.html'


})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

    public titulo:string;
    public listado:string;

    constructor(){
        this.titulo="pijaputa";
        this.listado="shalaheadshala";

       
        //console.log("se ha cargado ya la mierda");
    }

    ngOnInit(): void {
        //console.log('Ya se cargo esta chet');
    }

    ngDoCheck(): void {
        //console.log('tambien ya se cargo esta CHET');
    }

    ngOnDestroy(){
       //console.log('onDestroy Ejecutado');
    }

    cambiarTitulo(){
        this.titulo='nuevo titulo del componente';
    }
}