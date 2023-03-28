import { Pedido } from './../../models/pedidos/pedidos.module';
import { ProductosService } from 'src/app/services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  dataInfo: any = [];
  pedido: any = [];
  listPedido: any = [];
  confirmation: any = [];
  info: any = [];
  mensaje = '';

  referencia: string = ''

  constructor(
    private productservices : ProductosService
  ) { }

  ngOnInit(): void {
    this.getPedidos();
    this.getConfirmation();
  }

  getPedidos(){
    this.productservices.getPedido().subscribe(
      res =>{
        this.dataInfo = res;
        console.log("🚀 ~ file: orders.component.ts:26 ~ OrdersComponent ~ getPedidos ~ this.dataInfo:", this.dataInfo)
      }
    )
  }

  getConfirmation(){
    this.productservices.getConfirmation().subscribe(
      res => {
        this.confirmation = res;
        console.log(this.confirmation)
      }
    )
  }

  seeOrder(){
    console.log(this.referencia)
    let confirmation = this.confirmation.filter( (n: any) =>{
      let res = JSON.parse(n.resCompra);
      if(res.reference_sale == this.referencia){
        return n
      }
    })

    let pedido = this.dataInfo.filter( (n: any) =>{
      if(n.referenceCode == this.referencia){
        return n
      }
    })
    this.listPedido = JSON.parse(pedido[0].pedido)
    console.log(this.listPedido)
    console.log(JSON.parse(confirmation[0].resCompra));
    this.info = JSON.parse(confirmation[0].resCompra);
    if(this.info.response_message_pol === 'APPROVED'){
      this.mensaje = 'APROVADO'
    }
  }

}
