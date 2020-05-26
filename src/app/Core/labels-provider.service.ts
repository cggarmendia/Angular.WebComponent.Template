import { Injectable } from '@angular/core';
import { labels } from '../../Internationalization/labels';
import { SettingsProviderService } from './settings-provider.service';
import { ReplaceTextPipe } from '../shared/pipes/replace-text.pipe';

@Injectable({
  providedIn: 'root',
})
export class LabelsProviderService {
  public labelsByLang: any;

  public constructor(protected settingsProvider: SettingsProviderService, private replaceText: ReplaceTextPipe) {
  }

  public translate(key: string) {
    if (!this.labelsByLang) {
      this.labelsByLang = labels[this.settingsProvider.GetProperty('lang')];
    }
    return this.labelsByLang[key] ? this.labelsByLang[key] : key;
  }

  public translateAndTransform(key: string, args: any[]) {
    return this.replaceText.transform(this.translate(key), args);
  }
}
