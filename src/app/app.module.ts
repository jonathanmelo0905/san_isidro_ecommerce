import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { PanelaComponent } from './components/panela/panela.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PieComponent } from './components/pie/pie.component';
import { IconCarritoComponent } from './components/icon-carrito/icon-carrito.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';

//external imports

import { PayPalComponent } from './components/pay-pal/pay-pal.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import { CurrencyPipePipe } from './pipes/currency-pipe.pipe';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProduccionComponent } from './components/produccion/produccion.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductosService } from './services/productos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    CategoriasComponent,
    DescripcionComponent,
    UserComponent,
    PanelaComponent,
    ProductosComponent,
    PieComponent,
    IconCarritoComponent,
    CarritoComponent,
    PruebasComponent,
    PayPalComponent,
    RespuestaComponent,
    CurrencyPipePipe,
    CheckoutComponent,
    NosotrosComponent,
    ProduccionComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductosService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
