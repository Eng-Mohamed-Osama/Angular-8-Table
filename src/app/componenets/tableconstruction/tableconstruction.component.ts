import { Component, OnInit,Input } from '@angular/core';
import {Istudents} from "../../app.component";

@Component({
  selector: '[app-tableconstruction]',
  templateUrl: './tableconstruction.component.html',
  styleUrls: ['./tableconstruction.component.scss']
})
export class TableconstructionComponent implements OnInit {
  @Input() std:Istudents;

  constructor() { }

  ngOnInit() {
  }
  modifiy(b){
    this.std.salary = (this.std.salary + Number(b));
  }
  modifiy2(b){
    this.std.salary -= b;
  }
  modifiy3(a){
    this.std.salary = 1500;
    a.value ='';
  }

}
