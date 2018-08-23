import { Component, OnInit } from '@angular/core';
import { InicioService } from '../../Servicios/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public items:any[]=[];
  public var1:any="";
   constructor(private _servicio: InicioService) { }
 
   ngOnInit() {
     this.obtener();
   }
   obtener() {
     this._servicio.urlGetPrueba().subscribe(
       result => {
         console.log(result);
         this.items = result;
       },
       error => {
         console.log(error);
       }
     );
   }
 }
 