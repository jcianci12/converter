import { Pipe, PipeTransform } from '@angular/core';
import { ObjecttypeService } from './objecttype.service';

@Pipe({
  name: 'isstring'
})
export class IsstringPipe implements PipeTransform {
  constructor(public objecttype:ObjecttypeService){

  }

  transform(value: unknown): boolean {
    //console.log(value, this.objecttype.type(value) )
    return this.objecttype.type(value) == "string";
  }


  

}
