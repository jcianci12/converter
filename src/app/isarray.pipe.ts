import { Pipe, PipeTransform } from '@angular/core';
import { ObjecttypeService } from './objecttype.service';

@Pipe({
  name: 'isarray'
})
export class IsarrayPipe implements PipeTransform {
  constructor(public objecttype:ObjecttypeService){

  }
  transform(value: unknown): boolean {
    // console.log("array:",this.objecttype.type(value) == "array")
    return this.objecttype.type(value) == "array";
  }

}
