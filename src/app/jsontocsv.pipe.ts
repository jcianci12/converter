import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsontocsv'
})
export class JsontocsvPipe implements PipeTransform {

  // This function takes an object and returns a flattened version of it with dotted keys
  // e.g. { foo: { bar: 'baz' } } becomes { 'foo.bar': 'baz' }
  private flatten = (obj: any, prefix: string = ''): any => {
    return Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? prefix + '.' : '';
      if (typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
        Object.assign(acc, this.flatten(obj[k], pre + k));
      } else if (Array.isArray(obj[k])) {
        obj[k].forEach((elem: any, i: number) => {
          Object.assign(acc, this.flatten(elem, pre + k + `[${i}]`));
        });
      } else {
        acc[pre + k] = obj[k];
      }
      return acc;
    }, {});
  };

  // This function takes a JSON object as input and returns a CSV-formatted string
  transform(jsonObj: any): string {
    // If the input is an array, process each object in the array and return the CSV-formatted string
    if (Array.isArray(jsonObj)) {
      if (jsonObj.length === 0) {
        return '';
      }

      // Get the headers for the CSV by flattening the first object in the array and joining the keys with commas
      const headers = Object.keys(this.flatten(jsonObj[0])).join(',') + '\n';

      // Convert each object in the array to a row in the CSV by flattening the object, getting the values, and joining them with commas
      const rows = jsonObj
        .map((row: any) => Object.values(this.flatten(row)).join(','))
        .join('\n');

      // Return the headers and rows joined together with a newline character
      return headers + rows;
    } else {
      // If the input is an object (not an array), process the object and return the CSV-formatted string

      // Get the headers for the CSV by flattening the object and joining the keys with commas
      const headers = Object.keys(this.flatten(jsonObj)).join(',') + '\n';

      // Get the values for the CSV by flattening the object, getting the values, and joining them with commas
      const rows = Object.values(this.flatten(jsonObj))
        .map((row: any) => Object.values(row).join(','))
        .join('\n');

      // Return the headers and rows joined together with a newline character
      return headers + rows;
    }
  }

}
