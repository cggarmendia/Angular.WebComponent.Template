import { Component, OnInit, ElementRef} from '@angular/core';  
import { SettingsProvider } from "../../Core/SettingsProvider.Service";  
import { LabelsProvider } from "../../Core/LabelsProvider.Service";
import { ExternalEventManager } from "../../Core/ExternalEventManager.Service";

@Component({
  templateUrl: './VuelingXXX.component.html',
  styleUrls: ['./VuelingXXX.component.scss'],
  providers: [SettingsProvider, LabelsProvider, ExternalEventManager]
})

export class VuelingXXX implements OnInit{	
	model: any = [];		
	labels: any = [];
	lang:string;	

	constructor(private settingsProvider: SettingsProvider, private labelsProvider: LabelsProvider, private eventManager:ExternalEventManager) { 
		this.lang = settingsProvider.GetProperty("lang");
	}	
	
    ngOnInit(): void {		
		this.labels = this.labelsProvider.GetLabels(this.lang);
		this.model = this.settingsProvider.GetViewModel();
		this.attacheEvents();
	}

	handleClick(){		
		this.eventManager.triggerEvent('meComunicoFueraDelComponente', '#estoyFueraDelComponente');		
	}

	attacheEvents(){
		this.eventManager.addEvent('estoyEscuchandoJsNativo', '#estoyDentroDelComponente', this.doSomethingWhenEventIsFired, this);		
	}

	doSomethingWhenEventIsFired(event) {		
		this.model.viewModel.someInformation = "He sido modificado por un componente que no esta hecho en Angular";
	}
}
