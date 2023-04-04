import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validjson'
})
export class ValidjsonPipe implements PipeTransform {

  transform(str: string): boolean {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

}
