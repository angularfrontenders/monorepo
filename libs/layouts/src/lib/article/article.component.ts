import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'af-article-layout',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './article.component.html',
    styleUrl: './article.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleLayoutComponent {}
