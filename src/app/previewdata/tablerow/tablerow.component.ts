import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablerow',
  templateUrl: './tablerow.component.html',
  styleUrls: ['./tablerow.component.css']
})
export class TablerowComponent implements OnInit {
@Input() data
  constructor() { }

  ngOnInit(): void {
  }

}
