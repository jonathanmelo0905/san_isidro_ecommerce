import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import {Md5} from 'ts-md5';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  constructor(public productosService: ProductosService) {}

  public listaProductos?: any;
  public total?: any = [];
  public amountProduct: any = [];


  totalCarrito: number = 0;
  costoEnvio: number = 12000;
  totalPagar: number = 0;
  iva: number = 0.19;
  minimoValor: boolean = false;
  carUpdate: boolean = false;
  stateSend: boolean = false;
  public estadoPayu: boolean = false;

  //-----variables payu---------
  merchantId?: number
  accountId?: number
  amount?: number
  ApiKey: string = '4Vj8eK4rloUd272L48hsrarnUA'
  referenceCode?: string
  currency?: string = 'COP'
  buyerEmail?: string

  public infoPayu: any = [{
    merchantId: 508029,
    accountId: 512321,
    description: 'prueba de pagos con payu',
    referenceCode: 'jonathan',
    amount: 20000.00,
    tax: 3800,
    taxReturnBase: 16200,
    currency: 'COP',
    signature: 'df2410c263f743593a01aa2b90525f2b',
    test: 0,
    buyerEmail: 'jonathanmelo0905@gmail.com',
    telephone: 3104818398,
    buyerFullName: 'jonathan melo',
    responseUrl: 'http://localhost:4200/#/respuesta',
    confirmationUrl: 'https://jonathanmelo.online/habitat/books'
  }]

  ngOnInit(){
    this.infoCarrito();
    let cont = 0;
    for(let n of this.listaProductos){
      this.amountProduct[cont] = n.cantidad;
      cont++;
    }
    this.subtotal();
    setTimeout(function(){
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 500);
  }

  infoCarrito(){
    this.listaProductos = localStorage.getItem('carrito');
    this.listaProductos = JSON.parse(this.listaProductos);
  }

  subtotal() {
    this.totalCarrito = 0;
    this.totalPagar = 0;
    this.listaProductos.map((dato: any) => {
      dato.subtotal = dato.precio * dato.cantidad;
      this.totalCarrito = this.totalCarrito + dato.subtotal;
      this.totalPagar = this.totalCarrito;
      return dato;
    });
  }

  addProducto(opcion: number, i: any) {
    opcion === 1 ? this.amountProduct[i]++ : opcion === 2 && this.amountProduct[i] > 1 ? this.amountProduct[i]-- : '';
    
  }

  actualizarCarrito(){
    let long = this.listaProductos.length;
    for(let n=0; n<long; n++){
      this.listaProductos[n].cantidad = this.amountProduct[n];
    }
    this.carUpdate = true;
    setInterval(() => {
      this.carUpdate = false
    }, 2000)
    this.subtotal();   
    localStorage.setItem('carrito', JSON.stringify(this.listaProductos));
    this.productosService.updateCar$?.emit(this.listaProductos) 
  }

  realizarCompra() {
    this.infoPayu[0].amount = this.totalPagar;
    console.log(this.infoPayu.amount)
    this.infoPayu[0].tax = this.totalPagar * this.iva;
    this.infoPayu[0].taxReturnBase = this.totalPagar - this.infoPayu[0].tax;

    console.log(this.listaProductos);
    this.estadoPayu = true;
    this.merchantId = this.infoPayu[0].merchantId;
    this.referenceCode = this.infoPayu[0].referenceCode;
    this.amount = this.infoPayu[0].amount;
    let clave = this.ApiKey + '~' + this.merchantId + '~' + this.referenceCode + '~' + this.amount + '~' + this.currency
    console.log(clave)
    const md5 = new Md5();
    this.infoPayu[0].signature = md5.appendStr(clave).end();
  }

  eliminarProduct(producto: any){
  console.log("🚀 ~ file: carrito.component.ts:117 ~ CarritoComponent ~ eliminarProduct ~ producto", producto)
    let filtro = this.listaProductos.filter((n:any) => n.id != producto.id);
    localStorage.setItem('carrito', JSON.stringify(filtro));
    this.infoCarrito();
    this.productosService.updateCar$?.emit(this.listaProductos) 
  }
}