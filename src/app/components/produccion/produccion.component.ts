import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.component.html',
  styleUrls: ['./produccion.component.css']
})
export class ProduccionComponent implements OnInit {

  produccion: any = [
    {
      tittle: 'Siembra de caña',
      foto: 'assets/imagenes/caña.jpeg'
    },
    {
      tittle: 'Mantenimiento del cultivo',
      foto: 'assets/imagenes/caña.jpeg'
    },
    {
      tittle: 'Corte de caña',
      foto: 'assets/imagenes/caña.jpeg'
    },
    {
      tittle: 'Apronte',
      foto: 'assets/imagenes/caña.jpeg'
    },
    {
      tittle: 'Extracción de jugos',
      foto: 'assets/imagenes/caña.jpeg'
    },
    {
      tittle: 'Evaporacion de jugos y mieles',
      foto: 'assets/imagenes/caña.jpeg'
    },
    {
      tittle: 'Moldeo',
      foto: 'assets/imagenes/caña.jpeg'
    },
    {
      tittle: 'Empaque',
      foto: 'assets/imagenes/caña.jpeg'
    },
    {
      tittle: 'Producto final',
      foto: 'assets/imagenes/caña.jpeg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(function(){
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 500);
  }

}
