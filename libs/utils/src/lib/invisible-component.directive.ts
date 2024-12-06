import { Directive } from '@angular/core';

@Directive({
    selector: '[afInvisibleFlex]',
    standalone: true,
    host: {
        'style': 'display: contents'
    }
})
export class InvisibleComponentDirective {}
