import { Component, HostListener, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-panela',
  templateUrl: './panela.component.html',
  styleUrls: ['./panela.component.css']
})
export class PanelaComponent implements OnInit {

  constructor(private producto: ProductosService) { }

  colorverde: string = 'red';


  productos: any = [{
      id: 1,
      name: 'Panela - Organica - Pulverizada -1000gr.',
      precio: 10400,
      url: 'assets/imagenes/panela-1000g.png',
      subtotal: 10400,
      cantidad: 1
    },{
      id: 2,
      name: 'Panela - Organica, - Pulverizada - Sachet 6gr. (100 und).',
      precio: 12500,
      url: 'assets/imagenes/imagen-panela.png',
      subtotal: 12500,
      cantidad: 1
    },{
      id: 3,
      name: 'Panela - Organica - Pulverizada - Sachet 6gr. (100 und).',
      precio: 11000,
      url: 'assets/imagenes/panela-1000g.png',
      subtotal: 11000,
      cantidad: 1
    },{
      id: 4,
      name: 'Panela - Organica - en pastilla 500gr',
      precio: 6500,
      url: 'assets/imagenes/panela-pastilla.png',
      subtotal: 6500,
      cantidad: 1
    },{
      id: 5,
      name: 'Panela - Organica - Pulverizada - Sachet 6gr. (100 und).',
      precio: 7800,
      url: 'assets/imagenes/imagen-panela.png',
      subtotal: 7800,
      cantidad: 1
    },{
      id: 6,
      name: 'Panela - Organica - Pulverizada - Sachet 6gr. (100 und).',
      precio: 5000,
      url: 'assets/imagenes/imagen-panela.png',
      subtotal: 5000,
      cantidad: 1
    },{
      id: 1,
      name: 'Panela - Organica - Pulverizada -1000gr.',
      precio: 10400,
      url: 'assets/imagenes/panela-1000g.png',
      subtotal: 10400,
      cantidad: 1
    },{
      id: 2,
      name: 'Panela - Organica, - Pulverizada - Sachet 6gr. (100 und).',
      precio: 12500,
      url: 'assets/imagenes/imagen-panela.png',
      subtotal: 12500,
      cantidad: 1
    },{
      id: 3,
      name: 'Panela - Organica - Pulverizada - Sachet 6gr. (100 und).',
      precio: 11000,
      url: 'assets/imagenes/panela-1000g.png',
      subtotal: 11000,
      cantidad: 1
    },{
      id: 4,
      name: 'Panela - Organica - en pastilla 500gr',
      precio: 6500,
      url: 'assets/imagenes/panela-pastilla.png',
      subtotal: 6500,
      cantidad: 1
    },{
      id: 5,
      name: 'Panela - Organica - Pulverizada - Sachet 6gr. (100 und).',
      precio: 7800,
      url: 'assets/imagenes/imagen-panela.png',
      subtotal: 7800,
      cantidad: 1
    },{
      id: 6,
      name: 'Panela - Organica - Pulverizada - Sachet 6gr. (100 und).',
      precio: 5000,
      url: 'assets/imagenes/imagen-panela.png',
      subtotal: 5000,
      cantidad: 1
    }
  ]

  ngOnInit(): void {
    setTimeout(function(){
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 500);
  }

  productoSeleccionado(producto: any){
    this.producto.producto$?.emit(producto)
  }

  
  @HostListener("document:scroll")
  scroll(){
    console.log('hola mundo2', document.body.scrollTop)
    if(document.body.scrollTop > 40){
      console.log('hola mundo', document.body.scrollTop)
    }
  }

}
