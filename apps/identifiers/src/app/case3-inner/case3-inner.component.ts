import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case3-inner',
  templateUrl: './case3-inner.component.html',
  styleUrls: ['./case3-inner.component.css']
})
export class Case3InnerComponent {

  @Input() public id: string = '';

}
