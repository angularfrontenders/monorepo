import { Directive, input, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: 'a[afBColor], button[afBColor]',
    standalone: true
})
export class ColorBindingDirective {
    public afBColor = input.required<string>();

    @HostBinding('style.color')
    public get color(): string {
        return this.afBColor();
    }

    @HostListener('click')
    public onClick(): void {
        console.log('clicked!');
    }
}
