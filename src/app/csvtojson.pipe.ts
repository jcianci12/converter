import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'csvtojson'
})
export class CsvtojsonPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return "";

    const lines = value.split('\n');
    const header = lines[0].split(',');
    const result = [];

    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentline = lines[i].split(',');

      for (let j = 0; j < header.length; j++) {
        obj[header[j]] = currentline[j] ? currentline[j].trim() : '';
      }

      result.push(obj);
    }

    return JSON.stringify(result);
  }

}
