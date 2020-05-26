import { Component, OnInit, ElementRef } from '@angular/core';
import { SettingsProviderService } from '../core/settings-provider.service';
import { LabelsProviderService } from '../core/labels-provider.service';
import { ExternalEventManagerService } from '../core/external-event-manager.service';
import { CustomCurrencyPipe } from '../shared/pipes/custom-currency.pipe';

@Component({
  templateUrl: './template-xxx.component.html',
  styleUrls: ['./template-xxx.component.scss'],
  providers: [SettingsProviderService, LabelsProviderService, ExternalEventManagerService]
})

export class TemplateXxxComponent implements OnInit {
  public model: any = [];
  public staticServerUri: string;

  constructor(private settingsProvider: SettingsProviderService, public labelsProvider: LabelsProviderService,
              private eventManager: ExternalEventManagerService, private currencyPrice: CustomCurrencyPipe) {
  }

  ngOnInit(): void {
    this.model = this.settingsProvider.GetData();
    this.attachEvents();
  }

  handleClick() {
    const data = {
      dataProperty: 'output of web component'
    };
    this.eventManager.triggerGlobalEvent('events.outputOfWebComponent', data);
  }

  private attachEvents() {
    this.eventManager.addGlobalEvent('events.inputOfWebComponent',
      this.doSomethingWhenEventIsFired, this);
  }

  doSomethingWhenEventIsFired(event: any) {
    this.model.someInformation =
      `This information comes from outside the web component: ${event.detail.dataProperty}`;
  }

  public getTextOfPriceWithoutCurrencyCode(){
    return this.currencyPrice.transform(this.model.price, true, this.model.currencyCode, this.model.decimalSeparator,
      false, '1.2-2');
  }

  public getTextOfPriceWithCurrencyCode(){
    return this.currencyPrice.transform(this.model.price, false, this.model.currencyCode, this.model.decimalSeparator,
      false, '1.2-2');
  }
}
