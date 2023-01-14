import { Component } from '@angular/core';

// Services
import { ModelService  } from './pattern/invoice/services/model.service';
import { InvoiceInvokerService } from './pattern/invoice/invoker/invoice-invoker.service';
import { ModifyTotalAmountCommandService } from './pattern/invoice/commands/modify-total-amount/modify-total-amount-command.service';
// Interfaces

import { IInvoice } from './pattern/iInvoice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Command pattern';

  public invoice: IInvoice;

  public constructor(
    private _modelService: ModelService,
    private _invoiceInvokerService: InvoiceInvokerService,
    private _modifyTotalAmountCommandService: ModifyTotalAmountCommandService) {
    this.invoice = this._modelService.create();
  }

  public async totalAmountBlur($event: any): Promise<void> {
    this._invoiceInvokerService.setCommand(this._modifyTotalAmountCommandService);
    await this._invoiceInvokerService.invoke();
  }

}
