import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-previewdata',
  templateUrl: './previewdata.component.html',
  styleUrls: ['./previewdata.component.css']
})
export class PreviewdataComponent implements OnInit {
  @Input() JSONstring: object[]

  constructor() { }

  ngOnInit(): void {
  }



}
