import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaykeyvalue',
  templateUrl: './displaykeyvalue.component.html',
  styleUrls: ['./displaykeyvalue.component.css']
})
export class DisplaykeyvalueComponent implements OnInit {
  @Input() data:any
  constructor() { }

  ngOnInit(): void {
  }
  logit(value:any){

  }

}
