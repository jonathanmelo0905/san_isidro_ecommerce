import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

  constructor(private router: Router) { }

  public respuestaPayu: string = '';
  menssaje?: string;
  transactionState: any;
  txValue: any;
  merchantName: any;
  processingDate: any;
  referenceCode: any;
  lapPaymentMethodType: any;
  lapPaymentMethod: any;
  currency: any;
  reference_pol: any;
  description: any;
  merchantId: any;
  pseBank: any;
  transactionId: any;

  ngOnInit(): void {
    this.respuestaPayu = this.router.url;
    console.log(this.respuestaPayu)
    this.variablesRes();
  }

  confirmationUrl(variable: any){
    this.respuestaPayu = this.router.url;
    let restante = this.respuestaPayu.split('?');
    let datos = restante[1].split('&');
    let resultado;
    let resVairable;
    for(let r of datos){
      resultado = r.split('=');
      if(resultado[0] === variable){
        resVairable = resultado[1]
      }
    }
    return resVairable;
  }   

  variablesRes(){
    this.transactionState = this.confirmationUrl('transactionState')
    this.txValue = this.confirmationUrl('TX_VALUE');
    this.merchantName = this.confirmationUrl('merchant_name');
    this.processingDate = this.confirmationUrl('processingDate');
    this.lapPaymentMethodType = this.confirmationUrl('lapPaymentMethodType'); 
    this.lapPaymentMethod = this.confirmationUrl('lapPaymentMethod');
    this.referenceCode = this.confirmationUrl('referenceCode');
    this.currency = this.confirmationUrl('currency');
    this.reference_pol = this.confirmationUrl('reference_pol');
    this.description = this.confirmationUrl('description');
    this.merchantId = this.confirmationUrl('merchantId');
    this.pseBank = this.confirmationUrl('pseBank');
    this.transactionId = this.confirmationUrl('transactionId');

    if(this.transactionState == 4){
      this.menssaje = "Tu pedido está confirmado."
    }else if(this.transactionState == 6){
      this.menssaje = "Transacción rechazada"
    }else if(this.transactionState == 104){
      this.menssaje = "Error de la transaccion"
    }else if(this.transactionState == 7){
      this.menssaje = "Pago pendiente"
    }
  }

}
