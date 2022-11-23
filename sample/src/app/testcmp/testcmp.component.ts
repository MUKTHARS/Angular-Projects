import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-testcmp',
  templateUrl: './testcmp.component.html',
  styleUrls: ['./testcmp.component.css']
})
export class TestcmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
 
}


