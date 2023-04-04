import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonheaders'
})
export class JsonheadersPipe implements PipeTransform {

  transform(value: any): string[] {
    if (Array.isArray(value) && value.length > 0) {
      const headers = Object.keys(value[0]);
      for (let i = 1; i < value.length; i++) {
        const rowHeaders = Object.keys(value[i]);
        for (let j = 0; j < rowHeaders.length; j++) {
          if (!headers.includes(rowHeaders[j])) {
            headers.push(rowHeaders[j]);
          }
        }
      }
      return headers;
    } else {
      console.error('Error getting headers: invalid input type or empty array');
      return [];
    }
  }

}
