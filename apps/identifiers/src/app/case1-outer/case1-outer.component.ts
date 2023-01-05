import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case1-outer',
  templateUrl: './case1-outer.component.html',
  styleUrls: ['./case1-outer.component.css']
})
export class Case1OuterComponent {

  @Input() public id: string = '';

}
