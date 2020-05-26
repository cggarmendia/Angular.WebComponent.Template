import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class SettingsProviderService {

  public model: any;

  GetProperty(propertyName: string) {
    return this.GetViewModel()['settings'][propertyName];
  }

  GetViewModel() {
    if (!this.model) {
      this.model = window[environment.componentName + 'AngularModel'];
    }
    return this.model;
  }

  GetData() {
    return this.GetViewModel()['data'];
  }
}
