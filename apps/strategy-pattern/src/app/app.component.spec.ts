import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PatternModule } from './pattern/pattern.module';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule.forRoot([]), FormsModule, PatternModule],
            declarations: [AppComponent]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Strategy pattern'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Strategy pattern');
    });

    it('should render title in a h1 tag', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Strategy pattern');
    });
});
