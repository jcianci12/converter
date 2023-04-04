import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsontocsv'
})
export class JsontocsvPipe implements PipeTransform {

  transform(jsonObj: any): string {
    const flatten = (obj: any, prefix: string = ''): any => {
      return Object.keys(obj).reduce((acc, k) => {
        const pre = prefix.length ? prefix + '.' : '';
        if (typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
          Object.assign(acc, flatten(obj[k], pre + k));
        } else if (Array.isArray(obj[k])) {
          obj[k].forEach((elem: any, i: number) => {
            Object.assign(acc, flatten(elem, pre + k + `[${i}]`));
          });
        } else {
          acc[pre + k] = obj[k];
        }
        return acc;
      }, {});
    };

    if (Array.isArray(jsonObj)) {
      if (jsonObj.length === 0) {
        return '';
      }

      const headers = Object.keys(flatten(jsonObj[0])).join(',') + '\n';

      const rows = jsonObj
        .map((row: any) => Object.values(flatten(row)).join(','))
        .join('\n');

      return headers + rows;
    } else {
      const headers = Object.keys(flatten(jsonObj)).join(',') + '\n';

      const rows = Object.values(flatten(jsonObj))
        .map((row: any) => Object.values(row).join(','))
        .join('\n');

      return headers + rows;
    }
  }

}
