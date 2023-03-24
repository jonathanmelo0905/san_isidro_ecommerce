import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {

  @ViewChild('menus', {static: true}) menus?: ElementRef;

  constructor(private renderer2: Renderer2) { }

  estado: boolean = true;

  ngOnInit(): void {
  }

  menu(){
    const menu = this.menus?.nativeElement;
    this.estado ?
    this.renderer2.setStyle(menu, 'margin-left', '0%') :
    this.renderer2.setStyle(menu, 'margin-left', '-150%');
    this.estado = !this.estado
  }

}
