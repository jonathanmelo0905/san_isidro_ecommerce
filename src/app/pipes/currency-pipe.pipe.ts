import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let mayusucula = value.toUpperCase()
    return mayusucula;
  }

}
