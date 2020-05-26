import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { LabelsProviderService } from 'src/app/core/labels-provider.service';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) public locale: string,
              private labelsProvider: LabelsProviderService) {
  }

  transform(num: any, onlyCurrency: boolean, currencyCode: string, separatorDecimal: string = ',',
            showSymbol: boolean = false, digits: string = '1.2-2'): any {
    const value = new CurrencyPipe(this.locale)
      .transform(num, currencyCode, showSymbol, digits, this.locale);

    const amount = value.slice(value.match(/\d/).index);

    return onlyCurrency ? amount.replace('.', separatorDecimal)
    : this.getCurrencyTag(amount, separatorDecimal, currencyCode);
  }

  private getCurrencyTag(amount: string, separatorDecimal: string, currencyCode: string) {
    const priceHtml = '<span class="wrapper_currency">{0}{1}<sup>{2}  <span>{3}</span></sup></span>';
    const args: Array<any> = [];
    args.push(amount.split('.')[0]);
    args.push(separatorDecimal);
    args.push(amount.split('.')[1]);
    args.push(currencyCode);
    return this.labelsProvider.translateAndTransform(priceHtml, args);
  }
}
