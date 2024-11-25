import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'af-articles',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './articles.component.html',
    styleUrl: './articles.component.css'
})
export class ArticlesComponent {}
