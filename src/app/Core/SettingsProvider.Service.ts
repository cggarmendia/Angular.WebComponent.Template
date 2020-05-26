import { Injectable } from '@angular/core';  
import { environment } from '../../environments/environment';

@Injectable()  
  
export class SettingsProvider {                
    
    GetProperty(propertyName: string){
        return this.GetViewModel()["settings"][propertyName];
    }	
    
    GetViewModel(){
        return window[environment.componentName + "AngularModel"];
    }
} 
