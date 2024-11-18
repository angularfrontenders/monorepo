import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleOneComponent } from './article_one.component';

describe('ArticleOneComponent', () => {
    let component: ArticleOneComponent;
    let fixture: ComponentFixture<ArticleOneComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ArticleOneComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ArticleOneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
