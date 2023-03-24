import { Component, OnInit } from '@angular/core';
import { Observable, Subject, take } from 'rxjs';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {

  constructor(private productoServices: ProductosService) { }

  stateProduct: boolean = true;
  stateModal: boolean = false;
  stateCarrito: boolean = false;
  mensaje: string = '';
  meses: number = 12

  producto: any = []

  ngOnInit(): void {
    this.producto! = localStorage.getItem('producto');
    this.producto = JSON.parse(this.producto);
    console.log("🚀 ~ file: descripcion.component.ts:25 ~ DescripcionComponent ~ ngOnInit ~ this.producto:", this.producto)
    if(this.producto.id === 5){
      this.meses = 6;
    }
    setTimeout(function(){
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 500);
  }

  boton(){
  }

  productoSeleccionado(producto: any){
    let listaProductos: any = localStorage.getItem('carrito');
    listaProductos = JSON.parse(listaProductos || '[]');
    if(listaProductos.length > 0){
      this.stateProduct = !listaProductos.some((n: any) => n.id === producto.id);
    }

    if(this.stateProduct){
      this.stateCarrito = true;
      console.log(this.stateProduct, 'ver resultado')
      this.stateProduct = false;
      this.productoServices.producto$?.emit(producto)
      localStorage.removeItem('producto');
    }else{
      this.mensaje = 'Este producto ya fue agregado al carrito'
      this.stateModal = true;
      setTimeout(() => this.stateModal = false, 1500)
    }
  }

}
