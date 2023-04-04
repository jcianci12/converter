import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjecttypeService {

  constructor() { }

  type(o) {
    return this.TYPES[typeof o] || this.TYPES[TOSTRING.call(o)] || (o ? 'object' : 'null');
};

 TYPES = {
  'undefined'        : 'undefined',
  'number'           : 'number',
  'boolean'          : 'boolean',
  'string'           : 'string',
  '[object Function]': 'function',
  '[object RegExp]'  : 'regexp',
  '[object Array]'   : 'array',
  '[object Date]'    : 'date',
  '[object Error]'   : 'error'
}
}
const TOSTRING = Object.prototype.toString;
