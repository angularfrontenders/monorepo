import { Directive, input, HostBinding } from '@angular/core';

@Directive({
    selector: '[afBDisabled]',
    standalone: true
})
export class DisabledBindingDirective {
    public afBDisabled = input.required<boolean>();

    @HostBinding('attr.disabled')
    public get disabled(): boolean | undefined {
        return this.afBDisabled() ? this.afBDisabled() : undefined;
    }
}
