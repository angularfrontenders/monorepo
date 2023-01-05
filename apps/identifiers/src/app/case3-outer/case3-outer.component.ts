import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case3-outer',
  templateUrl: './case3-outer.component.html',
  styleUrls: ['./case3-outer.component.css']
})
export class Case3OuterComponent {

  @Input() public id: string = null;

  public get resultId(): string {
    return `${this.id}_case3Inner`;
  }

}
