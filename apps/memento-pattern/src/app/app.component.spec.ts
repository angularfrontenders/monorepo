import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonModelService } from './pattern/services/personModel.service';

class MockPersonModelService {
    public toString(): string {
        return '';
    }

    public setModel(_model: unknown): void {
        return null;
    }

    public getModel(): unknown {
        return null;
    }

    public makeModelBackup(): void {
        return null;
    }

    public restoreModelBackup(): unknown {
        return null;
    }
}

describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule.forRoot([])],
            providers: [{ provide: PersonModelService, useValue: new MockPersonModelService() }],
            declarations: [AppComponent]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Memento pattern'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Memento pattern');
    });

    it('should render title in a h1 tag', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Memento pattern');
    });
});
