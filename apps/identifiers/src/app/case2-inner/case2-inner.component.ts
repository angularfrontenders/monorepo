import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-case2-inner',
    templateUrl: './case2-inner.component.html',
    styleUrls: ['./case2-inner.component.css']
})
export class Case2InnerComponent {
    @Input() public id = '';
}
