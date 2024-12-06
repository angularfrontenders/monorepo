import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvisibleComponentDirective } from '@af/utils';

export type buttonType = 'primary' | 'secondary';

/**
 * Botón rectangular que contiene un texto indicando la acción. Además puede visualizarse de dos maneras para indicar su propósito:
 * primario o secundario.
 * @author Angular frontenders
 */
@Component({
    selector: 'af-text-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './text-button.component.html',
    styleUrl: './text-button.component.scss',
    hostDirectives: [{ directive: InvisibleComponentDirective }]
})
export class TextButtonComponent {
    @Input() label = '';
    @Input() type: buttonType = 'primary';
}
