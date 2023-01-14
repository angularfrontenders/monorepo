import { Injectable } from '@angular/core';

import { IInvoice } from '../../../iInvoice';
import { ICreateHeaderCommand } from './iCreateHeaderCommand';

@Injectable({
  providedIn: 'root'
})
export class CreateHeaderCommandBuilderService {

  public build(invoice: IInvoice): ICreateHeaderCommand {
    return {
      invoiceDate: invoice.invoiceDate,
      invoiceNumber: invoice.invoiceNumber,
      totalAmount: invoice.totalAmount
    };
  }
}
