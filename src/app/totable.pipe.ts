import { Pipe, PipeTransform } from '@angular/core';
import { GetpropertiesforobjectinarrayService } from './getpropertiesforobjectinarray.service';
import { ObjecttypeService } from './objecttype.service';

@Pipe({
  name: 'totable'
})
export class TotablePipe implements PipeTransform {
  constructor(public objecttype: ObjecttypeService, public getprops: GetpropertiesforobjectinarrayService) {

  }
  transform(value: Array<string>): Array<string> {
    return this.getTableData(value);
  }

  getTableData(data: Array<string>) {
    let headerprops = this.getprops.getdistinctkeys(data)
    console.log(headerprops)

    let r = data.reduce((acc, val, index) => {
let row = []
      headerprops.forEach(h => {
        row.push(val[h])
      })
      acc.push(row)

      return acc
    }, [])
    console.log(r)
    return r
  }

}
