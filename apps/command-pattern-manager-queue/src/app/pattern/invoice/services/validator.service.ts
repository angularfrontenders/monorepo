import { Injectable } from '@angular/core';

import { IInvoice } from '../../iInvoice';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public isValidInvoiceDate(value: Date): boolean {
    return !!value;
  }

  public isValidTotalAmount(value: number): boolean {
    return value !== 0;
  }

  public validate(invoice: IInvoice): Array<string> {
      const errors: Array<string> = [];

      if (!this.isValidInvoiceDate(invoice.invoiceDate)) {
        errors.push('date invalid');
      }

      if (!this.isValidTotalAmount(invoice.totalAmount)) {
        errors.push('total amount invalid');
      }

      return errors;

  }
}
