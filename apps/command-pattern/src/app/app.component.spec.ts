import { FormsModule } from '@angular/forms';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModelService } from './pattern/invoice/services/model.service';
import { InvoiceInvokerService } from './pattern/invoice/invoker/invoice-invoker.service';
import { ModifyTotalAmountCommandService } from './pattern/invoice/commands/modify-total-amount/modify-total-amount-command.service';

describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, RouterModule.forRoot([])],
            providers: [
                { provide: ModelService, useValue: new ModelService() },
                { provide: InvoiceInvokerService, useValue: {} },
                { provide: ModifyTotalAmountCommandService, useValue: {} }
            ],
            declarations: [AppComponent]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Command pattern'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('Command pattern');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Command pattern');
    });
});
