import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { TemplateXxxComponent } from './template-xxx/template-xxx.component';
import { ReplaceTextPipe } from './shared/pipes/replace-text.pipe';
import { CustomCurrencyPipe } from './shared/pipes/custom-currency.pipe';

@NgModule({
  declarations: [ReplaceTextPipe, CustomCurrencyPipe, TemplateXxxComponent],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ReplaceTextPipe,
    CustomCurrencyPipe
  ],
  entryComponents: [TemplateXxxComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {

    const strategyFactory = new ElementZoneStrategyFactory(TemplateXxxComponent, this.injector);
    const entryCustomElement = createCustomElement(TemplateXxxComponent,
      {
        injector: this.injector,
        strategyFactory
      });
    customElements.define('template-xxx-markup', entryCustomElement);
  }
}
