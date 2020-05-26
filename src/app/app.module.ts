import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { HttpClientModule} from '@angular/common/http';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { VuelingXXX } from './Modules/VuelingXXX/VuelingXXX.component';

@NgModule({
  declarations: [VuelingXXX],
  imports: [
	BrowserModule, 
  HttpClientModule  
  ],
  entryComponents: [VuelingXXX]  
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
	  
	const strategyFactory = new ElementZoneStrategyFactory(VuelingXXX, this.injector);
	const entryCustomElement = createCustomElement(VuelingXXX, 
		{ 
			injector: this.injector, 
			strategyFactory 
		});
    customElements.define("vuelingxxx-markup", entryCustomElement);
  }
}
