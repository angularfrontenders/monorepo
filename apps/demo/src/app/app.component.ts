import { Component } from '@angular/core';
import { MainLayoutComponent } from '@af/layouts';
import { NavigationComponent } from '../components/navigation.component';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';
import { ArticlesComponent } from '../components/articles.component';

@Component({
    standalone: true,
    imports: [MainLayoutComponent, HeaderComponent, NavigationComponent, FooterComponent, ArticlesComponent],
    selector: 'af-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {}
