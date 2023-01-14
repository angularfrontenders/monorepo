import { Component } from '@angular/core';

// Services
import { ModelService  } from './pattern/invoice/services/model.service';
import { InvoiceInvokerService } from './pattern/invoice/invoker/invoice-invoker.service';
import { CommandName } from './pattern/invoice/commands/commands';
// Interfaces
import { IInvoice } from './pattern/iInvoice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Command pattern with manager and specific invoker with queue';

  public invoice: IInvoice;

  public constructor(
    private _modelService: ModelService,
    private _invoiceInvokerService: InvoiceInvokerService) {
      this.invoice = this._modelService.create();
  }

  public async createInvoice($event: UIEvent): Promise<void> {
    if (this.invoice) {
      await this._invoiceInvokerService.invokeInvoiceCommand(CommandName.CreateHeader);
    }
  }

  public async totalAmountBlur($event: UIEvent): Promise<void> {
    if (this.invoice) {
      await this._invoiceInvokerService.invokeInvoiceCommand(CommandName.ModifyTotalAmount);
    }
  }

  public async createModifyInvoice($event: UIEvent): Promise<void> {
    if (this.invoice) {
      this.invoice.totalAmount = 99;
      await this._invoiceInvokerService.invokeInvoiceCommand(CommandName.CreateHeader);
      this.invoice.totalAmount = 100;
      await this._invoiceInvokerService.invokeInvoiceCommand(CommandName.ModifyTotalAmount);
    }
  }

}
