import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case1-inner',
  templateUrl: './case1-inner.component.html',
  styleUrls: ['./case1-inner.component.css']
})
export class Case1InnerComponent {

  @Input() public id: string = null;

}
