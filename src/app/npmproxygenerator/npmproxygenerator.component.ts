import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-npmproxygenerator',
  templateUrl: './npmproxygenerator.component.html',
  styleUrls: ['./npmproxygenerator.component.css']
})
export class NpmproxygeneratorComponent implements OnInit {

public configuration:any
  constructor() { }

  ngOnInit(): void {
    this.configuration = new Configuration()
  }
  changevalue(key, val) {
    //console.log(key,val)
    this.configuration[key]=val.target.value;
    //delete this.configuration[prevKey];entri
    //this.configuration[newKey] = value;
  }
  trackByIndex(index,value){
    return index;
  }
}
export class Configuration{
  constructor(){
    this.username = ""
    this.password = ""
    this.host = ""
    this.port = ""
  }

  username: string
  password: string
  host: string
  port: string
}
