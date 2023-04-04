import { Injectable } from '@angular/core';
import { ObjecttypeService } from './objecttype.service';

@Injectable({
  providedIn: 'root'
})
export class GetpropertiesforobjectinarrayService {

  constructor(public objecttype: ObjecttypeService) {

  }

  
  getdistinctkeys(data: Array<string>) {

    console.log(data)
    let type = this.objecttype.type(data)
    if (type == "array") {
      let returndata = data.reduce((acc: Array<string>, val): Array<string> => {
        //loop through the keys of the data
        Object.keys(val).forEach(k => {
          //call the function to check this key name with the rest of the array
          let matchingkeys = this.getarrayofmatchingkeys(data, k)
          console.log("matching keys:", matchingkeys)
          //if the string doesnt exist
          if (!this.stringexistsinarray(acc, k)) {
            //add it
            console.log("acc", acc, "keytoadd", k)
            acc = acc.concat(k)
          }
  
        })
        console.log("reduce", acc)
        return acc
      }, [])
console.log("returning", returndata)
    return returndata
    }


   

    
  }
  //returns an array of matching keys, given an array of objects, and the key we are looking for
  getarrayofmatchingkeys(data: Array<string>, key: string): Array<string> {
    let matchingkeys = data.filter(i => {
      let d = Object.keys(i).filter(k => k == key)
      console.log("len", d.length)
      return d.length > 0

    })
    return matchingkeys.map(i => key)
  }

  flattenarray(arrayofobjects: Array<object>): Array<string> {
    return [].concat.apply([], arrayofobjects)
  }

  stringexistsinarray(array: Array<string>, stringtofind: string): boolean {
    return Boolean(array.find(i => {
      return i == stringtofind
    }
    ))
  }
}
