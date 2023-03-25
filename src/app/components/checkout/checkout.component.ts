import { Component, HostListener, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Pedido } from 'src/app/models/pedidos/pedidos.module';
import {Md5} from 'ts-md5';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @ViewChild('inicio') start!: ElementRef;

  veredas: any = [];

  shippingPrice: any = [
    {name: 'Envio nacional', precio: 13500, kilo: 4},
    {name: 'Envio zonal', precio: 11000, kilo: 3}
  ]

  departamentos: any = [];
  listCar: any = [];
  dataClient: any = [];
  lista: any = [];
  municipios: any = [];
  totalCarrito: number = 0;
  totalPagar: number = 0;
  iva: number = 0.19;
  totalEnvio?: number;
  peso: number = 0;
  idDep: string = '';
  stateMun: boolean = false;
  public estadoPayu: boolean = false;
  checkout: boolean = true;

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
    description: 'Panela san isidro',
    referenceCode: 'jhfhg',
    amount: 20000.00,
    tax: 3800,
    taxReturnBase: 16200,
    currency: 'COP',
    signature: 'df2410c263f743593a01aa2b90525f2b',
    test: 1,
    buyerEmail: 'jonathanmelo0905@gmail.com',
    telephone: 3104818398,
    buyerFullName: 'jonathan melo',
    responseUrl: 'http://localhost:4200/#/respuesta',
    confirmationUrl: 'https://jonathanmelo.online/habitat/confirmacionPayu'
  }]

  pedido: Pedido = <Pedido> {
    type: '',
    referenceCode: '',
    cedula: 0,
    names:  '',
    surnames:  '',
    email:  '',
    departamento:  '',
    municipio:  '',
    direccion:  '',
    telefono:  '',
    nota:  '',
    pedido: {},
    estado: ''
  }

  user: FormGroup = new FormGroup({});

  constructor(public productosService: ProductosService, private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.localStorage();
    this.createForm();
    this.subtotal();
    this.listOfCities();
    this.myFunction();
  }

  localStorage(){
    this.listCar = localStorage.getItem('carrito');
    this.listCar = JSON.parse(this.listCar);
    console.log("🚀 ~ file: checkout.component.ts:73 ~ CheckoutComponent ~ ngOnInit ~ listCar:", this.listCar)
    this.dataClient = JSON.parse(localStorage.getItem('dataClient') || '[]');
  }


  createPedido(data: any){
    this.pedido.pedido = this.listCar;
    this.pedido.cedula = data.cedula;
    this.pedido.type = data.type;
    this.pedido.referenceCode = this.referenceCode!;
    this.pedido.names = data.names;
    this.pedido.surnames = data.surnames;
    this.pedido.email = data.email;
    this.pedido.departamento = data.departamento.departamento;
    this.pedido.municipio = data.municipio.municipio;
    this.pedido.direccion = data.direccion;
    this.pedido.telefono = data.telefono;
    this.pedido.nota = data.nota;
    this.pedido.estado = 'en preparacion';
    console.log("🚀 ~ file: checkout.component.ts:110 ~ CheckoutComponent ~ this.pedido:", this.pedido)
  }


  createForm(){
    this.user = new FormGroup({
      type: new FormControl('',Validators.required),
      cedula: new FormControl('',[Validators.required, Validators.minLength(6),Validators.pattern(/^[0-9]\d{5,20}$/)]),
      names: new FormControl('',Validators.required),
      surnames: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      departamento: new FormControl('',Validators.required),
      municipio: new FormControl('',Validators.required),
      direccion: new FormControl('',Validators.required),
      telefono: new FormControl('',Validators.required),
      nota: new FormControl(''),
    })
  }

  listOfCities(){
    this.productosService.listOfCities().subscribe(
      res =>{
        let hash: any = {}
        console.log(res)
        this.lista = res;
        this.departamentos = this.lista.filter((o:any) => hash[o.c_digo_dane_del_departamento] ? false : hash[o.c_digo_dane_del_departamento] = true);
      }
    )

  }

  myFunction() {
    setTimeout(function(){
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 500);

  }


  filterMunicipios(event: any){
    console.log("🚀 ~ file: checkout.component.ts:111 ~ CheckoutComponent ~ filterMunicipios ~ event:", event)
    if(event.c_digo_dane_del_departamento == 25){
      this.totalEnvio = this.shippingPrice[1].precio + ((this.peso - 1000) * this.shippingPrice[1].kilo);
      this.totalPagar = this.totalCarrito + this.totalEnvio!;
    }else{
      this.totalEnvio = this.shippingPrice[0].precio + ((this.peso - 1000) * this.shippingPrice[0].kilo);
      this.totalPagar = this.totalCarrito + this.totalEnvio!;
    }
    console.log(this.lista)
    this.municipios = this.lista.filter((n:any) => n.c_digo_dane_del_departamento === event.c_digo_dane_del_departamento)
    this.stateMun = true;
  }

  cotizador(id: any){
    this.totalPagar = this.totalCarrito + this.totalEnvio!
    console.log(this.totalEnvio, 'costo del envio')
  }

  subtotal() {
    this.totalCarrito = 0;
    this.totalPagar = 0;
    console.log(this.listCar)
    this.listCar.map((dato: any) => {
      this.peso =this.peso + (dato.peso * dato.cantidad);
      this.totalCarrito = this.totalCarrito + dato.subtotal;
      this.totalPagar = this.totalCarrito + this.totalEnvio!;
      return dato;
    });
  }

  eliminarDiacriticos(texto: any) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
  }
  
  realizarCompra(data:any) {
    this.infoPayu[0].buyerFullName = data.names + ' ' + data.surnames;
    this.infoPayu[0].telephone = data.telefono;
    this.infoPayu[0].amount = this.totalPagar;
    this.infoPayu[0].buyerEmail = data.email;
    this.infoPayu[0].tax = this.totalPagar * this.iva;
    this.infoPayu[0].taxReturnBase = this.totalPagar - this.infoPayu[0].tax;
    this.referenceCode = Math.round(Math.random()*999999).toString();
    this.infoPayu[0].referenceCode = this.referenceCode
    this.merchantId = this.infoPayu[0].merchantId;
    this.amount = this.infoPayu[0].amount;
    let clave = this.ApiKey + '~' + this.merchantId + '~' + this.referenceCode + '~' + this.amount + '~' + this.currency
    console.log(clave)
    const md5 = new Md5();
    this.infoPayu[0].signature = md5.appendStr(clave).end();
    this.estadoPayu = true;
    this.createPedido(data)
    console.log(this.infoPayu[0].signature);
    console.log('inf0rmacion que se enviara a payu',this.infoPayu)
  }

  enviar(){
    localStorage.setItem('dataClient',JSON.stringify(this.pedido))
    console.log(this.pedido)
    this.productosService.savePedido(this.pedido).subscribe(
      res =>{
        console.log(res)
      }
    )
  }

  res(){
    console.log(this.checkout)
  }

}
