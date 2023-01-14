import { Injectable } from '@angular/core';

import { IInvoice } from '../../../iInvoice';
import { IModifyTotalAmountCommand } from './iModifyTotalAmountCommand';

@Injectable({
  providedIn: 'root'
})
export class ModifyTotalAmountCommandBuilderService {

  public build(invoice: IInvoice): IModifyTotalAmountCommand {
    return {
      totalAmount: invoice.totalAmount
    };
  }
}
