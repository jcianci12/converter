import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csvto-json',
  templateUrl: './csvto-json.component.html',
  styleUrls: ['./csvto-json.component.css']
})
export class CSVtoJSONComponent implements OnInit {
data:string = ''
  constructor() { }

  ngOnInit(): void {
  }
  CSVDemoData(){
    this.data ='test1,test2,test3\n1,2,3'
  }


}
