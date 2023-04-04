import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'converter';

  links = [
    { title: 'Json to CSV', fragment: 'jsontocsv' },
    { title: 'CSV to JSON', fragment: 'csvtojson' }

  ];

  constructor(public route: ActivatedRoute) {}


}
