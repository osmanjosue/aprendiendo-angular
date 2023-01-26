import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
@Injectable({
  providedIn: 'root'
})
export class ZapatillaService{
    private zapatillas:Zapatilla[];

   constructor(){
    this.zapatillas = [
        new Zapatilla('reebos clalalasic', 'adidas', 'rosado trozado', 500, true),
        new Zapatilla('pelemeleleje', 'REEBUS', 'rojo cojo', 1500, false),
        new Zapatilla('run Away', 'Asics', 'verde shrek', 1500, false),
        new Zapatilla('AlbertoCuloAbierto', 'adidas', 'Negro Niga', 1000, true),
        new Zapatilla('AlbertoCuloAbierto', 'nike', 'Negro', 1200, true)
  
      ];
    }

    getTexto(){
        return "hola mundo desde un servicio";
    }

    getZapatillas(){
        return this.zapatillas;
    }
}