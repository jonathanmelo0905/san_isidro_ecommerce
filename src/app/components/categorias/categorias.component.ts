import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor(private __http: HttpClient) { }

  
  ngOnInit(): void {
    // this.__http.get('https://jsonplaceholder.typicode.com/posts')
    // .subscribe((datos: any) => this.usuarios = datos);
    // setTimeout(function(){
    //   document.documentElement.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: "smooth",
    //   });
    // }, 500);
  }

  // borrarUsuario(user: number){
  //   this.usuarios = this.usuarios.filter((usuario: any) => usuario.id != user)
  // }
  // (borrar)="borrarUsuario($event)"
}
