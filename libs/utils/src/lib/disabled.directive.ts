import { Directive, input } from '@angular/core';

@Directive({
    selector: '[afDisabled]',
    standalone: true,
    host: {
        '[attr.disabled]': 'afDisabled()'
    }
})
export class DisabledDirective {
    public afDisabled = input.required<boolean>();
}
