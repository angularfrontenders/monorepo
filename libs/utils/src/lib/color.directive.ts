import { Directive, input } from '@angular/core';

@Directive({
    selector: 'a[afColor], button[afColor]',
    standalone: true,
    host: {
        '[style.color]': 'afColor()',
        '(click)': 'onClick()'
    }
})
export class ColorDirective {
    public afColor = input.required<string>();

    public onClick(): void {
        console.log('clicked!');
    }
}
