import { OrdersComponent } from './components/orders/orders.component';
import { ProduccionComponent } from './components/produccion/produccion.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { PanelaComponent } from './components/panela/panela.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';

const routes: Routes = [{
  path: '',
  component: PanelaComponent,
},
{
  path: 'descripcion_producto',
  component: DescripcionComponent,
},
{
  path: 'productos',
  component: ProductosComponent,
},
{
  path: 'carrito',
  component: CarritoComponent,
},
{
  path: 'pruebas',
  component: PruebasComponent,
},
{
  path: 'respuesta',
  component: RespuestaComponent,
},
{
  path: 'checkout',
  component: CheckoutComponent,
},
{
  path: 'nosotros',
  component: NosotrosComponent,
},
{
  path: 'produccion',
  component: ProduccionComponent,
},
{
  path: 'orders',
  component: OrdersComponent,
},
{
  path: 'melo',
  component: CategoriasComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
