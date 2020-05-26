import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { HttpClientModule} from '@angular/common/http';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { TemplateXXX } from './Modules/TemplateXXX/TemplateXXX.component';

@NgModule({
  declarations: [TemplateXXX],
  imports: [
	BrowserModule, 
  HttpClientModule  
  ],
  entryComponents: [TemplateXXX]  
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
	  
	const strategyFactory = new ElementZoneStrategyFactory(TemplateXXX, this.injector);
	const entryCustomElement = createCustomElement(TemplateXXX, 
		{ 
			injector: this.injector, 
			strategyFactory 
		});
    customElements.define("templatexxx-markup", entryCustomElement);
  }
}
