import { Pipe, PipeTransform } from '@angular/core';
import { ObjecttypeService } from './objecttype.service';

@Pipe({
  name: 'isnull'
})
export class IsnullPipe implements PipeTransform {

  constructor(public objecttype:ObjecttypeService){

  }
  transform(value: unknown): boolean {
    return this.objecttype.type(value) == "null";
  }

}
