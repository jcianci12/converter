import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayobject',
  templateUrl: './displayobject.component.html',
  styleUrls: ['./displayobject.component.css']
})
export class DisplayobjectComponent implements OnInit {
@Input() data:any
  constructor() { }

  ngOnInit(): void {
  }

}
