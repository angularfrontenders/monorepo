import { Component, OnInit } from '@angular/core';
import { IModel } from './model/iModel';
import { ComparerService } from './comparer/comparer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Compare objects';
  objectA: IModel;
  objectB: IModel;
  objectC: IModel;
  resultEqualsAB: boolean;
  resultEqualsAC: boolean;

  constructor(private _comparerService: ComparerService) {
  }

  ngOnInit(): void {
    this.objectA = {
      id: 1,
      name: 'test46',
      age: 46
    };
    this.objectB = {
      id: 2,
      name: 'test18',
      age: 18
    };
    this.objectC = {
      id: 1,
      name: 'test46',
      age: 46
    };

    // comparing
    this.resultEqualsAB = this._comparerService.equals(this.objectA, this.objectB);
    this.resultEqualsAC = this._comparerService.equals(this.objectA, this.objectC);
  }
}
