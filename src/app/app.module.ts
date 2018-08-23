import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InicioService } from './Servicios/inicio.service';
import { HttpModule } from '../../node_modules/@angular/http';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BarraNavegacionComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    BrowserModule,  NgxPaginationModule
  ],
  providers: [
    appRoutingProviders,
  InicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
