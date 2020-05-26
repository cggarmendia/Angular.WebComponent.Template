import { Injectable } from '@angular/core';  
import { labels } from '../../Internationalization/labels';

@Injectable()  
export class LabelsProvider {
    GetLabels(lang: string){
        return labels[lang];
    }
} 
