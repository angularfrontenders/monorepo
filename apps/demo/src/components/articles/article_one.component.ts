import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleLayoutComponent } from '@af/layouts';

@Component({
    selector: 'af-article-one',
    standalone: true,
    imports: [CommonModule, ArticleLayoutComponent],
    templateUrl: './article_one.component.html',
    styleUrl: './article_one.component.css'
})
export class ArticleOneComponent {}
