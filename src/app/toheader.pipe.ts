import { Pipe, PipeTransform } from '@angular/core';
import { GetpropertiesforobjectinarrayService } from './getpropertiesforobjectinarray.service';
import { ObjecttypeService } from './objecttype.service';

@Pipe({
  name: 'toheader'
})
export class ToheaderPipe implements PipeTransform {

  constructor(public objecttype: ObjecttypeService,public getprops:GetpropertiesforobjectinarrayService) {

  }

  transform(data: any): Array<string> {
    
      return this.getprops.getdistinctkeys(data)

    
  }


  

}