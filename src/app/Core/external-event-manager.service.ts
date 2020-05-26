import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExternalEventManagerService {
  constructor(private elementRef: ElementRef) {
  }

  triggerEvent(eventName: string, elementQuery: string) {
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

  addEvent(eventName: string, elementQuery: string, callback: any, reference: any) {
    this.elementRef.nativeElement
      .querySelector(elementQuery)
      .addEventListener(
        eventName,
        callback.bind(reference)
      );
  }

  addGlobalEvent(eventName: string, callback: any, reference: any) {
    this.elementRef.nativeElement.ownerDocument
      .addEventListener(
        eventName,
        callback.bind(reference)
      );
  }

  triggerGlobalEvent(eventName: string, data: any) {
    const customEvent = new CustomEvent(eventName, {detail: data});
    this.elementRef.nativeElement.ownerDocument
      .dispatchEvent(customEvent);
  }

}
