import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceText'
})
export class ReplaceTextPipe implements PipeTransform {

  transform(valueToTransform: string, args?: any[]): string {
    let index = 0;
    for (const value of args) {
      valueToTransform = valueToTransform.replace('{' + index + '}', value);
      index++;
    }

    return valueToTransform;
  }

}
