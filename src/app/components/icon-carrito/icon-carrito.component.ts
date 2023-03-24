import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-icon-carrito',
  templateUrl: './icon-carrito.component.html',
  styleUrls: ['./icon-carrito.component.css']
})
export class IconCarritoComponent implements OnInit {

  cantidad: number = 0
  estado: any = true;
  productos: any = [];

  constructor( private producto: ProductosService) { }
  
  ngOnInit(): void {
    this.cantidad = this.carrito();
    this.producto.producto$?.subscribe( product => {
      this.productos.push(product)
      this.verCarrito();
      this.cantidad = this.carrito();
    })

    this.producto.updateCar$?.subscribe( update =>{
      let listaProductos: any = localStorage.getItem('carrito');
      listaProductos = JSON.parse(listaProductos || '[]');
      this.productos = listaProductos;
      this.cantidad = listaProductos.length;
    })
  }

  carrito(){
    let listaProductos: any = localStorage.getItem('carrito');
    listaProductos = JSON.parse(listaProductos || '[]');
    this.productos = listaProductos;
    return listaProductos.length;
  }

  public verCarrito(){
    localStorage.setItem('carrito', JSON.stringify(this.productos));
  }

}
