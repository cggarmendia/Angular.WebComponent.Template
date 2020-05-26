import { Injectable } from '@angular/core';  
import { ElementRef} from '@angular/core';  

@Injectable()  
export class ExternalEventManager {
    constructor(private elementRef:ElementRef) { 		
	}

    triggerEvent(eventName: string, elementQuery: string){     
        this.elementRef.nativeElement.ownerDocument
		.querySelector(elementQuery)
		.dispatchEvent(
			new Event(
				eventName, 
				{ 
					bubbles: true 
				}
			)
		);        
    }

    addEvent(eventName: string, elementQuery: string, callback: any, reference: any){
        this.elementRef.nativeElement
		.querySelector(elementQuery)
		.addEventListener(
			eventName, 
			callback.bind(reference)
		);
    }
} 
