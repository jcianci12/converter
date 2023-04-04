import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'torows'
})
export class TorowsPipe implements PipeTransform {

  
  transform(data: any,): Array<string> {
    data = JSON.parse(data)
    return data
  }

}
