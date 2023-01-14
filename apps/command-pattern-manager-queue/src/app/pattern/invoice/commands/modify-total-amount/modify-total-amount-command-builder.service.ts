import { Injectable } from '@angular/core';

import { IInvoice } from '../../../iInvoice';
import { IModifyTotalAmountCommand } from './iModifyTotalAmountCommand';

@Injectable({
  providedIn: 'root'
})
export class ModifyTotalAmountCommandBuilderService {

  public build(invoice: IInvoice): IModifyTotalAmountCommand {
    if (invoice?.id === undefined){
      throw new Error('no invoice id');
    }
    return {
      id: invoice.id,
      totalAmount: invoice.totalAmount
    };
  }
}
