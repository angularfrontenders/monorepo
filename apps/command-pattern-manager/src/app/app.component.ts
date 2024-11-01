import { Component } from '@angular/core';

// Services
import { ModelService } from './pattern/invoice/services/model.service';
import { InvoiceInvokerService } from './pattern/invoice/invoker/invoice-invoker.service';
import { CommandName } from './pattern/invoice/commands/commands';
// Interfaces
import { IInvoice } from './pattern/iInvoice';
import { ICommandService } from './pattern/iCommandService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Command pattern with manager and specific invoker';

    public invoice: IInvoice;

    public constructor(
        private _modelService: ModelService,
        private _invoiceInvokerService: InvoiceInvokerService
    ) {
        this.invoice = this._modelService.create();
    }

    public async totalAmountBlur($event: UIEvent): Promise<void> {
        await this._invoiceInvokerService.invokeInvoiceCommand(CommandName.ModifyTotalAmount);
    }
}
