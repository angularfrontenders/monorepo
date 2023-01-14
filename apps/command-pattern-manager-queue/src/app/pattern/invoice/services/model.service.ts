import { Injectable } from '@angular/core';
import { ModelTemplate } from '../../patterns/templateMethod/modelTemplate';

import { IInvoice } from '../../iInvoice';

@Injectable({
  providedIn: 'root'
})
export class ModelService extends ModelTemplate<IInvoice> {

  public isNew(): boolean {
    return this._model?.id === undefined;
  }

  public create(): IInvoice {
    this._model = {
      invoiceDate: new Date(),
      invoiceNumber: '',
      totalAmount: 0
    };
    return this._model;
  }

  public override getChanges(model: IInvoice): IInvoice {
    // TODO: Return changes between model and this._model
    return {
    } as IInvoice;
  }

  public override hasChanges(model: IInvoice, field?: string): boolean {
    const changes: IInvoice = this.getChanges(model);
    // TODO: Return changes between model and this._model
    if (field) {
       // check changes in field
    }
    else {
      // check anyChanges
    }
    // For example purposes send always true
    return true;
  }

}
