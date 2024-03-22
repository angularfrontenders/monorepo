import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'af-text-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-button.component.html',
  styleUrl: './text-button.component.scss',
})
export class TextButtonComponent {
  @Input() text = '';
}
