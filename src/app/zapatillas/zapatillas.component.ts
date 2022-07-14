import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit {

  public titulo2: string = "Componente de Zapatillas";
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor() {
    this.color = 'yellow';
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla('reebos clalalasic', 'adidas', 'rosado trozado', 500, true),
      new Zapatilla('pelemeleleje', 'REEBUS', 'rojo cojo', 1500, false),
      new Zapatilla('run Away', 'Asics', 'verde shrek', 1500, false),
      new Zapatilla('AlbertoCuloAbierto', 'adidas', 'Negro Niga', 1000, true)

    ];
  }

  ngOnInit(): void {
    console.log(this.zapatillas);
    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
      }
      /* console.log(index); */
    });
    /*  console.log(this.marcas); */
  }
  addMarca() {
    this.marcas.push(this.mi_marca);
  }
  getMarca() {
    alert(this.mi_marca);
  }
  borrarMarca(valor:number){
    this.marcas.splice(valor, 1);
  }
  onBlur(){
    console.log("has Salido Del Input");
  }

  mostrarPalabra(){
      alert(this.mi_marca);
  }

}

/* ejercicio, 
minuto 7 victor robles
-declara una variable array zapatilla de tipo zapatilla
-crea el constructor
-implementa el OnInit con el comando console.log(this.zapatillas)
-crea varias clases zapatilla
-implementa un NGFOR para el arreglo zapatillas
 */

/* crea una funcion llamada marcas que muestre las marcas sin repetirlas con un forEach(value, index)=>*/