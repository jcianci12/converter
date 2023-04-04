import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jSONparse'
})
export class JSONparsePipe implements PipeTransform {

  transform(value: any): object[] {
    try {
      return JSON.parse(value);
    } catch (e) {
      console.error('Error parsing JSON: ', e);
      return null;
    }
  }

}
