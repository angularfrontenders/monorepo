import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case2-outer',
  templateUrl: './case2-outer.component.html',
  styleUrls: ['./case2-outer.component.css']
})
export class Case2OuterComponent {

  @Input() public id: string = '';

  public get resultId(): string {
    return `${this.id}_case2Inner`;
  }

}
