import { PayuModule } from './../models/payu/payu-module';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Pedido } from '../models/pedidos/pedidos.module';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URL = 'http://192.168.0.109:3000/ecommerce';
  // API_URL = 'https://jonathanmelo.online/habitat'

  constructor( private http: HttpClient ) { }

  producto$? = new EventEmitter<any>();

  updateCar$? = new EventEmitter<any>();

  listaProductos$? = new EventEmitter<any>();

  public listOfCities(){
    return this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json')
  }

  public savePedido(pedido: Pedido){
    return this.http.post(`${this.API_URL}/pedido`, pedido)
  }

  public getPedido(){
    return this.http.get(`${this.API_URL}/getPedidos`)
  }

  
  public getConfirmation(){
    return this.http.get(`${this.API_URL}/getConfirmation`)
  }
}
