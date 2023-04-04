import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-JsontoCSV',
  templateUrl: './JsontoCSV.component.html',
  styleUrls: ['./JsontoCSV.component.css']
})
export class JsonToCSVComponent implements OnInit {

  data: any = ''

  header = []
  constructor() { }
  
  ngOnInit(): void {
    this.JsonArray()
  }
  
  exportToCSV() {
    console.log(this.data)
  
    let data = JSON.parse(this.data)
  
    const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
    console.log(data)
    //we need the data to be an array
    data = this.ifobjectisnotarraymakeitone(data)
  
    this.header = Object.keys(data[0]);
    const csv = data.map((row) =>
      this.header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(this.header.join(','));
    const csvArray = csv.join('\r\n');
  
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
  
    a.href = url;
    a.download = 'export';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
  
  ifobjectisnotarraymakeitone(headerstring: object) {
    let returnval
    if (headerstring instanceof Array) {
      returnval = headerstring
    }
    else {
      //create an object of the properties
      let a = []
      a.push(headerstring)
      returnval = a
  
    }
    console.log(returnval)
    return returnval
  }
  JsonArray(){
    this.data ='[{"test":"1234","test123":"432"},{"test123":"432"}]'
  }
  JsonObject(){
    this.data ='{"glossary": {"title": "example glossary","GlossDiv": {"title": "S",			"GlossList": {                "GlossEntry": {                    "ID": "SGML",					"SortAs": "SGML",					"GlossTerm": "Standard Generalized Markup Language",					"Acronym": "SGML",					"Abbrev": "ISO 8879: 1986",					"GlossDef": {                        "para": "A meta-markup language, used to create markup languages such as DocBook.",						"GlossSeeAlso": ["GML", "XML"]                    },"GlossSee": "markup"                }            }        }    }}'
  }

}
