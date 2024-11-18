import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'af-main-layout',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {}
