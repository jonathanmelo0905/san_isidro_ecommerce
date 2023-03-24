import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private producto: ProductosService) { }

  productos: any = [{
    id: 1,
    name: 'Panela Orgánica Pulverizada Sachet 8 g (100 Unids)',
    precio: 13600,
    url: 'assets/imagenes/imagen-panela.png',
    subtotal: 13600,
    cantidad: 1,
    peso: 800
  },{
    id: 2,
    name: 'Panela Orgánica Pulverizada Sachet 6 g (100 Unids)',
    precio: 12500,
    url: 'assets/imagenes/imagen-panela.png',
    subtotal: 12500,
    cantidad: 1,
    peso: 600
  },{
    id: 3,
    name: 'Panela Orgánica Pulverizada 500 g',
    precio: 5650,
    url: 'assets/imagenes/panela-1000g.png',
    subtotal: 5650,
    cantidad: 1,
    peso: 500
  },{
    id: 4,
    name: 'Panela Orgánica Pulverizada 1000 g',
    precio: 11000,
    url: 'assets/imagenes/panela-1000g.png',
    subtotal: 11000,
    cantidad: 1,
    peso: 1000
  },{
    id: 5,
    name: 'Panela Orgánica en Pastilla 500 g',
    precio: 5200,
    url: 'assets/imagenes/panela-pastilla.png',
    subtotal: 5200,
    cantidad: 1,
    peso: 500
  },{
    id: 6,
    name: 'Panela pulverizada saborizada sabor a maracuyá',
    precio: 6200,
    url: 'assets/imagenes/maracuya.png',
    subtotal: 6200,
    cantidad: 1,
    peso: 600
  },{
    id: 7,
    name: 'Panela pulverizada saborizada sabor a limón',
    precio: 6200,
    url: 'assets/imagenes/maracuya.png',
    subtotal: 6200,
    cantidad: 1,
    peso: 600
  }]

  ngOnInit(): void {
    setTimeout(function(){
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 500);
  }

  agregarProducto(producto: any){
    console.log('un producto agregado')
    localStorage.setItem('producto', JSON.stringify(producto));
  }

  

}
