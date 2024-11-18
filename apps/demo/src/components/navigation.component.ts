import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'af-navigation',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css'
})
export class NavigationComponent {}
